(ns bharati.binita.backend.demo3.main
  (:require
    [bharati.binita.backend.demo3.server :refer [app]]
    [org.httpkit.server :as http-kit]
    [environ.core :refer [env]]
    [clojure.tools.logging :as log])
  (:gen-class))

;contains function that can be used to stop http-kit server
(defonce server (atom nil))

(defn parse-port [[port]]
  (Integer/parseInt (or port (env :port) "3000")))

(defn start-server [port]
  (reset! server (http-kit/run-server app {:ip "192.168.10.12" :port port :thread 32})))

(defn stop-server []
  (when @server
    (@server :timeout 100)
    (reset! server nil)))
	
(defn -main [& args]
  (let [port (parse-port args)]
    (.addShutdownHook (Runtime/getRuntime) (Thread. stop-server))
    (start-server port)
    (log/info "server 
	on port:" port)))

(comment (start-server 4000)
(stop-server))
