(ns bharati.binita.frontend.demo1.main
  (:require [reagent.core :as reagent]
            [react-simple-keyboard :default Keyboard]
))

(def comp-state (reagent/atom {:showVK "none" :input "" :submittedEmail "" 
							   :submittedPassword "" :emailKlass "input100" :passwordKlass "input100"}))

(def comp-state-no-render (atom {:showVK "none" :latestFocus "none"}));Using normal atom so that re-rendering of component does not happen automatically on mutating the state.

(def keyboardRef1 (clojure.core/atom nil))

(defn generate-component [input]
[:div {:className "wrap-login100"}
[:form {:className "login100-form validate-form"}
     [:span {:className "login100-form-title p-b-43"} "Login to continue"]
	 [:div {:className "wrap-input100 validate-input" :data-validate "Valid email is required: ex@abc.xyz"}
	       [:input {:id "email" :className (get @comp-state :emailKlass) :type "text" :name "email"  
		   :onClick (fn [event] 
		                (js/console.log "email input onClick")
						(cond 
							(= (get @comp-state-no-render :showVK) "block")
								(do 
									(swap! comp-state-no-render assoc :latestFocus "email"))
							:else
								(swap! comp-state-no-render assoc :latestFocus "none")))
			:value (get @comp-state :submittedEmail)
			;onChange needs to be specified, else , input will become read-only, as value has been set.
            :onChange (fn [event] 
						   (js/console.log "email input onChange" (.-value (.-target event)))
						   (swap! comp-state assoc :submittedEmail (.-value (.-target event)))
						  )			}]
		   [:span {:className "focus-input100"}]
		   [:span {:className "label-input100"} "Email"]
	 ]
	 [:div {:className "wrap-input100 validate-input" :data-validate "Password is required"}
	       [:input {:id "password" :className (get @comp-state :passwordKlass) :type "password" :name "pass" 
		    :onClick (fn [event] 
						(cond 
							(= (get @comp-state-no-render :showVK) "block")
								(do 
									(swap! comp-state-no-render assoc :latestFocus "password"))
							:else
								(swap! comp-state-no-render assoc :latestFocus "none")))
			:value (get @comp-state :submittedPassword)
			:onChange (fn [event] 
						   (js/console.log "email input onChange" (.-value (.-target event)))
						   (swap! comp-state assoc :submittedPassword (.-value (.-target event)))
						   )}]
		   [:span {:className "focus-input100"}]
		   [:span {:className "label-input100"} "Password"]
	 ]
	 [:div {:className "flex-sb-m w-full p-t-3 p-b-32"}
	       [:div {:className "contact100-form-checkbox"}
		        [:input {:className "input-checkbox100" :id "ckb1" :type "checkbox" :name "remember-me"}]
				[:label {:className "label-checkbox100" :for "ckb1"} "Remember me"]
		   ]
		   [:div [:a {:href "#" :className "txt1"} "Forgot Password?"]]
      	  
	  ]
	  [:div {:className "flex-sb-m w-full p-t-3 p-b-32"}
	       [:div {:className "contact100-form-checkbox"}
		         [:input {:className "input-checkbox100" :id "ckb2" :type "checkbox" :name "use-virtual-keyboard" :onChange (fn [event] 
						  
								(js/console.log (str "UseVirtualKeyboard -> onChange: entered with1 " event))
								(js/console.log (str "UseVirtualKeyboard -> onChange: entered with2 " (type event)))
								(js/console.log (str "UseVirtualKeyboard -> onChange: entered with3 " (.-checked (.-target event))))
								(cond 
									(.-checked (.-target event)) ;when true
										(do 
											(js/console.log (str "UseVirtualKeyboard -> onChange: setting VK to visible "))
											(swap! comp-state assoc :showVK "block")
											(swap! comp-state-no-render assoc :showVK "block")											
											(js/console.log (str "bini1111") (.-id (.-activeElement js/document)));testing
										)
									:else
										(do 
											(js/console.log (str "UseVirtualKeyboard -> onChange: setting VK to hidden "))
											(swap! comp-state assoc :showVK "none")
											(swap! comp-state-no-render assoc :showVK "none")
											))
								
						  )}]
				 [:label {:className "label-checkbox100" :for "ckb2"} "Use virtual keyboard"]
		   ]
	  ]
	  [:div {:className "container-login100-form-btn"}
	        [:button {:className "login100-form-btn"} "Login"]
	  ]
	
	 
	  
]
[:div {:id "loginBackgroundDiv" :className "login100-more" :style {:background-image "url('images/bg-01.jpg')" :position "relative"}};this div is set to z-index 1
	[:div {:id "vkeyboardDiv" :style {:position "absolute" :z-index 2 :display (get @comp-state :showVK)
	:width "80%"}}
		[:input {:value (get @comp-state :input)
					:placeholder "Tap on the virtual keyboard to start"
					:onChange (fn [event]					
						(js/console.log (str "onChangeInput: entered with" event.target.value))
						(swap! comp-state assoc :input event.target.value)
						(js/console.log (str "onChangeInput: keyboardRef = " @keyboardRef1))
						(.setInput @keyboardRef1 event.target.value))}]
		 [:> Keyboard {:layoutName "default"
						  :onChange (fn [input] 						  
								(js/console.log (str "Keyboard -> onChange: entered with " input))
								(swap! comp-state assoc :input input)
								(js/console.log (str "Keyboard -> onChange: after mutating ratom = "@comp-state)))
                          :onKeyPress (fn [button]
                                        (js/console.log (str "onKeyPress: entered with " button))
										(cond 
											(= button "{enter}")
											(do 
											(js/console.log (str "Keyboard -> onKeyPress: submitted input " (get @comp-state :input)))
											;get last focussed element and paste the submitted input in that field
											(cond 
												(= (get @comp-state-no-render :latestFocus) "email")
													(do (swap! comp-state assoc :submittedEmail (get @comp-state :input))
														(swap! comp-state assoc :emailKlass "input-100 has-val"))
												(= (get @comp-state-no-render :latestFocus) "password")
													(do (swap! comp-state assoc :submittedPassword (get @comp-state :input))
														(swap! comp-state assoc :passwordKlass "input-100 has-val"))
											))
											:else
											(js/console.log (str "Keyboard -> onKeyPress: pressed input " button))
										  
										)

                            )
							:keyboardRef (fn [myRef] 
								(js/console.log (str "Before setting keyboard ref, keyboardRef = "@keyboardRef1))
								(reset! keyboardRef1 myRef)
								(js/console.log (str "After setting keyboard ref , keyboardRef = "@keyboardRef1)))
							
			}]
	]]
]

)


(defn run []
  (reagent/render [generate-component]
            (js/document.getElementById "root")))





