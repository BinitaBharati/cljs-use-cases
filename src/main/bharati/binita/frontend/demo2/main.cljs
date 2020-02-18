(ns bharati.binita.frontend.demo2.main)
;Add interactive tooltip. Refer to https://www.d3-graph-gallery.com/graph/interactivity_tooltip.html for sample code.

(def margin {:top 20 :right 30 :bottom 40 :left 90})

(def width (- 460  (get margin :left) (get margin :right)))

(def height (- 400  (get margin :top) (get margin :bottom)))

(defn constructSvg [parentDivId svgId] 
                   (-> (.select js/d3 parentDivId)
						 (.append "svg")
                         (.attr "width" (+ width (get margin :left) (get margin :right)))
						 (.attr "height" (+ height (get margin :top) (get margin :bottom)))
						 (.attr "id" svgId)
						 (.append "g")
						 (.attr "transform" (str "translate(" (get margin :left) "," (get margin :top) ")"))
						 (.attr "pointer-events" "all")))
						
(defn constructXAxis
		[startCoor endCoor startRange endRange]
        (-> (.scaleLinear js/d3)
						 (.domain (int-array [startCoor endCoor]))
						 (.range (int-array [startRange endRange]))))
						 
(defn constructYAxis 
		[startRange endRange data dataFn padding]
		(-> (.scaleBand js/d3)
			(.range (int-array [startRange endRange]))
		    (.domain (.map data dataFn))
			(.padding padding)))
			
(defn appendXAxis [svg x]
				  (-> (.append svg "g")
				    (.attr "transform" (str "translate(0," height ")"))
					(.call (.axisBottom js/d3 x))
					(.selectAll "text")
					(.attr "transform" "translate(-10,0)rotate(-45)")
					(.style "text-anchor" "end")))
					
(defn appendYAxis [svg y]
				  (-> (.append svg "g")
					  (.call (.axisLeft js/d3 y))))
					  
			
(defn showBarChartPopUp 
	[product_id product_name quantity_sold]
	(js/console.log (str "showBarChartPopUp: entered with  product_id = " product_id ", product_name = " product_name ", quantity_sold = " quantity_sold))
	(-> (.select js/d3 "#tooltip_div")
	     (.append "div")
		 (.attr "id" "innerToolTipDiv"))
	(-> (.select js/d3 "#innerToolTipDiv")
	    (.append "div")
		(.attr "style" "text-align: center; font-family: sans-serif")
		(.append "h4")
		(.html "Sales by merchant - ")
		(.append "font")
		(.attr "style" "color: blue")
		(.html product_name))
    (-> (.select js/d3 "#innerToolTipDiv")
	    (.append "div")
		(.attr "style" "text-align: center; font-family: sans-serif")
		(.append "h5")
		(.html "Total sold units: ")
		(.append "font")
		(.attr "style" "color: blue")
		(.html quantity_sold))
	(.csv js/d3 (str "http://192.168.10.12:8080/demo2/resources/product_to_merchant_" product_id ".csv")
	(fn [data] 
	     (let [x (constructXAxis 0 13000 0 width)
			   y (constructYAxis 0 height data (fn [d] (.-merchant_name d)) 0.5)
			   svg (constructSvg "#innerToolTipDiv" "svgPopUp")
			   rectGrps (-> (.selectAll svg "myPopUpRect")
							(.data data)
							(.enter)
							(.append "g"))]
			   (appendXAxis svg x)					
			   (appendYAxis svg y)	
               ;Append text inside of each rectangle. Refer : https://stackoverflow.com/questions/6725288/svg-text-inside-rect
			    (-> (.append rectGrps "rect")
					(.attr "x" (x 0))
					(.attr "y" (fn [d] (y (.-merchant_name d))))
					(.attr "width" (fn [d] (x (.-quantity_sold d))))
					(.attr "height" (.bandwidth y))
					(.attr "fill" "#69b3a2"))
				(-> (.append rectGrps "text")
					 (.attr "x" (fn [d] (- (x (.-quantity_sold d)) 30)))					
					 (.attr "y" (fn [d] (+ (y (.-merchant_name d)) 20)))					
					 (.attr "font-family" "Verdana")
					 (.attr "font-size" "8")
					 (.attr "fill" "blue")
					 (.html (fn [d] (.-quantity_sold d))))
				(-> (.select js/d3 "#tooltip_div")
					(.style "display" "block"))))))
					
(defn hideBarChartPopUp [] 
	(-> (.selectAll js/d3 "#innerToolTipDiv")
	    (.remove))
	(-> (.select js/d3 "#tooltip_div")
	    (.style "display" "none")))
	
	
					


(defn run []						 
		  (.csv js/d3 "http://192.168.10.12:8080/demo2/resources/mobile_product_sales.csv" 
          (fn [data]
          (js/console.log (str "entered csv callback handler with data = " (type data))) 
          (let [
				 x (constructXAxis 0 13000 0 width)
				 y (constructYAxis 0 height data (fn [d] (.-product_name d)) 0.5)
				 svg (constructSvg "#my_dataviz" "report1Svg")
                 ]				
				(appendXAxis svg x)					
				(appendYAxis svg y)					
				(-> (.selectAll svg "myRect")
				    (.data data)
					(.enter)
					(.append "rect")
					(.attr "x" (x 0))
					(.attr "y" (fn[d] 
					               (js/console.log (str "csv callback handler : setting y, d - " d))
								   (y (.-product_name d))) )
					(.attr "width" (fn[d] (x (.-quantity_sold d))))
					(.attr "height" (.bandwidth y))
					(.attr "fill" "#69b3a2")
					(.on "mouseover" (fn[d] 
					                     (js/console.log (str "MOUSE-OVER: entered with d " d))
										 (showBarChartPopUp (.-product_id d) (.-product_name d) (.-quantity_sold d))
					                    ))
					(.on "mousemove" (fn[d] 
					                     (js/console.log (str "MOUSE-MOVE: entered with d " d))
										 
					                    ))
					
					(.on "mouseout" (fn[d] 
					                      (js/console.log (str "MOUSE-OUT: entered with d " d))
										  (hideBarChartPopUp))))))))


