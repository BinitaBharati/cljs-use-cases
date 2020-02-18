# cljs-use-cases
This project exhibits few of the Clojurescript use cases . These use cases demonstrate interaction of Clojurescript with native Javascript, third party Javacsript libraries like jQuery and npm packages.

## Build
shadow-cljs is the build tool that will turn `.cljs` file into `.js` file. Edit the `shadow-cljs.edn` file with the name of the demo main file as desired. For example, to run demo1 use case, `shadow-cljs.edn` should contain the below entry:<br/>
`:modules {:main {:init-fn bharati.binita.frontend.demo1.main/run}}`. Run the below command to generate the build : <br/>
`npx shadow-cljs watch frontend`

## Run
Once build is completed, copy the generated `public/js/main.js` to respective Javascript directory of the demo. For example: for demo1, copy `public/js/main.js` to `public/demo1/js/main.js`

## Test
Open `http://<IP address>:<port>/demo1/index.html` to view the demo.
