(ns bharati.binita.backend.demo3.server
  (:require [compojure.core :refer [GET defroutes]]
            [clojure.tools.logging :as log]
            [cheshire.core :as json]
            [org.httpkit.server :refer [send! with-channel on-close on-receive]]))

(defonce channels (atom #{}))

(defn connect! [channel]
  (println "connect: entered")
  (swap! channels conj channel)
  (println "connect: exited"))

(defn disconnect! [channel status]
  (swap! channels disj channel))
  

(defn broadcast [ch payload]
  (let [msg (json/encode {:type "broadcast" :payload payload})]
    (run! #(send! % msg) @channels))
  (send! ch (json/encode {:type "broadcastResult" :payload payload})))

(defn echo [ch payload]
  (send! ch (json/encode {:type "echo" :payload payload})))
  
(defn sendCurCoord[ch curCoord]
	 (send! ch (json/encode curCoord))
	 (Thread/sleep 500))
  
(defn sendLocationCoords [ch payload]
	(sendCurCoord ch [12.978484 77.646547]);This is persistent vector
	(sendCurCoord ch [12.978376 77.645191])
	(sendCurCoord ch [12.978355 77.644074])
	(sendCurCoord ch [12.978313 77.6427])
	(sendCurCoord ch [12.978376 77.641627])
	(sendCurCoord ch [12.978292 77.640832])
	(sendCurCoord ch [12.977518 77.640918])
	(sendCurCoord ch [12.976472 77.640918])
	(sendCurCoord ch [12.975364 77.640982])
	(sendCurCoord ch [12.974506 77.641068])
	(sendCurCoord ch [12.973502 77.64109])
	(sendCurCoord ch [12.97256 77.641111])
	(sendCurCoord ch [12.971476 77.641197])
	)

(defn unknown-type-response [ch _]
  (send! ch (json/encode {:type "error" :payload "ERROR: unknown message type"})))

(defn dispatch [ch msg]
  (println "dispatch: entered with "msg)
  (let [parsed (json/decode msg)]
    ((case (get parsed "type")
        "echo" echo
        "broadcast" broadcast
		"READY-TO-RECEIVE-COORDS" sendLocationCoords
        unknown-type-response)
      ch (get parsed "payload"))))

(defn ws-handler [request]
  (println "ws-handler: entered with request = " request)
  (with-channel request channel
    (connect! channel)
    (on-close channel #(disconnect! channel %))
    (on-receive channel #(dispatch channel %))))

(defroutes app
  (GET "/ws" request (ws-handler request)))
