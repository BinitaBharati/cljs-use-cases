(ns bharati.binita.frontend.demo3.main)
;This is a demo of a WebSocket client.
;Native js WebSocket support is used here.

;Eqvnt js code --> var socket = new WebSocket('ws://192.168.10.12:3000/ws');
(def socket (js/WebSocket. "ws://192.168.10.12:3000/ws"))

(def coords (atom []))

(def counter (atom 0))

(def markerConfig (atom {:notInitialized true}))

(def map_config {:defaultZoomLevel 16 :prevZoomLevel 16 :minZoomLevel 0 :maxZoomLevel 20})

(defn initMap[]
  (let [map1 (.map js/L "rootDiv" #js {:minZoom 0 :maxZoom 20})
		attribution "'&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors, &copy; <a href='www.thunderforest.com'>ThunderForest</a>, &copy; Icons made by <a href='https://www.flaticon.com/authors/pixel-perfect' title='Pixel perfect'>Pixel perfect</a> from <a href='https://www.flaticon.com/' title='Flaticon'>www.flaticon.com</a>'"
		]
		(.addTo (.tileLayer js/L "https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=4c79c233b009451b87284f4bb426ba65"
		;(clj->js {:attribution attribution :zoomDelta 0.5})
		#js {:attribution attribution :zoomDelta 0.5}
		) map1)
		;(.setView map1 (clj->js [12.978484 77.646547]) (get map_config :defaultZoomLevel))
		(.setView map1 #js [12.978484 77.646547] 16)
		map1
		))
		
		
;https://stackoverflow.com/questions/18520620/how-can-i-determine-direction-with-gps-readings-alone-and-display-in-360-degrees	
;This function must compare the 2 input coordinates, and decide on the direction of movement. For now, I will just hard code the behaviour. 
(defn getImageInfo [prevCoord curCoord]
 (cond 
	(<= (aget (.parse js/JSON curCoord) 0) 12.977518)
	"frontal_truck.png"	
	:else
	"left_facing_truck.png"))
		
(defn initMarker []
	(.log js/console  "checking values as it has entered initMarker start")
	(js/console.log "marker notInitialized = "(get @markerConfig :notInitialized))
	(js/console.log "cur coords size = "(count @coords))
	(js/console.log "checking values as it has entered initMarker end")
    (try 
	(js/console.log "initMarker: entered with "@counter)
	(let [curIdx @counter
		  prevCoord (nth @coords curIdx)
		  curCoord (nth @coords (inc curIdx))
		  myIcon (.icon js/L #js {:iconUrl (getImageInfo prevCoord curCoord)
		  					:iconSize (into-array [33 33])})
		  marker (.marker js/L (.parse js/JSON prevCoord)  #js {:icon myIcon})]
		  (js/console.log (str "initMarker: prevCoord = " prevCoord ", curCoord = " curCoord))
		  (js/console.log (str "initMarker: map from markerConfig = " (get @markerConfig :map)))

		  (.addTo marker (get @markerConfig :map))

		  (swap! counter inc)
		  (swap! counter inc)
		  (js/setInterval 
			(fn[]
				(try 
					(let [curIdx @counter
						  prevCoord (nth @coords curIdx)
					      curCoord (nth @coords (inc curIdx))
			              icon (getImageInfo prevCoord curCoord)]
						  (.setIcon (.setLatLng marker (.parse js/JSON curCoord)) (.icon js/L #js 
																		{:iconUrl (getImageInfo prevCoord curCoord)
																		:iconSize (into-array [33 33])}))
						   (swap! counter inc)
						   (swap! counter inc))
				(catch js/Error jsEx
					;(js/console.log jsEx)
					(let [exMsg (.-message jsEx)]
						(if (not= (re-matches #"No item [0-9]+ in vector of length [0-9]+" exMsg) nil)
							(js/console.log "Caught known IOOB exception")
							(js/console.log "Caught unknown exception")))
							)
				(catch js/Object ex
					(js/console.log ex)))) 2000))
	  (catch js/Object ex1
		   (js/console.log ex1))))


(defn initWebSocket[]
;Eqvnt js code --> socket.onopen = function(event) {
;  console.log('WebSocket is connected.');
;  socket.send(JSON.stringify({"type": "echo", "payload" : "Hellooo"}));//send data to server
;};
;Refer to https://cljs.github.io/api/cljs.core/setBANG. It is used to set javacsript varibale value with = operator.
(set! (.-onopen socket) (fn[event]
							(js/console.log "WebSocket is connected.")
							(.send socket (.stringify js/JSON (clj->js {:type "READY-TO-RECEIVE-COORDS" :payload ""})))
							;(.send socket (clj->js {:type "echo" :payload "Hellooo"}))
							))
;Eqvnt js code --> socket.onerror = function(error) {
;  console.log('WebSocket Error: ' + error);
;  // Close if the connection is open.
;	if (socket.readyState === WebSocket.OPEN) {
;   socket.close();
;	}
;};
(set! (.-onerror socket) (fn[error]
							(cond 
								(= (.-readyState socket) (.-OPEN js/WebSocket))
									(.close socket))))
;Eqvnt js code --> socket.onmessage = function(event) {
;  var message = event.data;
;  console.log("Received msg from server = "+message);
;};

(set! (.-onmessage socket) (fn[event]
							(js/console.log "Received message from server" (.-data event) ", and event type = "(type (.-data event)))
							(js/console.log "is str = "(string? (.-data event)))
							(js/console.log "resurt of json parse"(.isArray js/Array (.parse js/JSON (.-data event))))
							(js/console.log "Current coords = " (clj->js @coords))
							(swap! coords conj (.-data event))
							(js/console.log "marker notInitialized = "(get @markerConfig :notInitialized))
							(js/console.log "cur coords size111 = "(count @coords))
							(when (and (get @markerConfig :notInitialized)
							           (> (count @coords) 1))
							    (js/console.log "entered")
								(initMarker)
								(swap! markerConfig assoc :notInitialized false))))
;Eqvnt js code
;// Do necessary clean up.
;socket.onclose = function(event) {
;  console.log('Disconnected from WebSocket.');
;};
(set! (.-onclose socket) (fn[event] (js/console.log "Disconnected from WebSocket"))))

	
(defn run [] 
	(let [elem (.getElementById js/document "rootDiv")] 
		(.log js/console "elem height = "(.-clientHeight elem)))	
    (initWebSocket)
	(swap! markerConfig assoc :map (initMap))
	;(initMarker)
	(js/console.log (str "huhuhaha")))
	
(run)
	
	
	

