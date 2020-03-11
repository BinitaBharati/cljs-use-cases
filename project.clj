(defproject cljs-use-cases "0.1.1-SNAPSHOT"
  :description "CLJS use cases"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.312"]
				 [http-kit "2.3.0"]
				 [org.clojure/tools.logging "0.3.1"]
				 [environ "1.1.0"]
				 [compojure "1.6.1"]
				 [cheshire  "5.10.0"]]

  :plugins [[lein-cljsbuild "1.1.4"
             :exclusions [org.clojure/clojure]]
            [lein-figwheel "0.5.16"]]

  :clean-targets ^{:protect false} ["resources/public/js/out"
                                    "resources/public/js/main.js"
                                    :target-path]

  :source-paths ["src-clj"]
  :main ^:skip-aot bharati.binita.backend.demo3.main
  :figwheel { 
					  :server-ip "192.168.10.12"
					  :server-port 8080 
					  					}
  :cljsbuild {
    :builds [{:id "cljs-use-cases"
              :source-paths ["src-cljs"]
              :figwheel 
					{ :websocket-host "192.168.10.12"
					  
					}
              :compiler {
                         :main bharati.binita.frontend.demo3.main
                         :asset-path "js/out"
                         :output-to "resources/public/js/main.js"
                         :output-dir "resources/public/js/out"
                         :source-map-timestamp true}}]
	}

)
