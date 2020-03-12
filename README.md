# cljs-use-cases
This project exhibits few of the Clojurescript use cases . These use cases demonstrate interaction of Clojurescript with native Javascript, third party Javacsript libraries like jQuery and npm packages.

## Build
This project uses two build tools namely shadow-cljs and lein.  Use cases which have only front end code use shadow-cljs, and use cases that have both frontend and backend code use lein (lein for the backend and lein-figwheel for the front end). Listed below are the updates required in build related files for both tools:
1. shadow-cljs: Edit the `shadow-cljs.edn` file with the name of the demo main file as desired. For example, to run demo1 use case, `shadow-cljs.edn` should contain the below entry:<br/>
`:modules {:main {:init-fn bharati.binita.frontend.demo1.main/run}}`. Run the below command to generate/run the build : <br/>
`npx shadow-cljs watch frontend`. This command also starts a server from which the generated build will be served.

2.lein: Edit the project.clj to contain the name of the backend and frontend file respectively. For example, to run demo3, edit the `:main` to point to the backend file, and the `:cljsbuild->:builds[0]->:compiler->:main` to point to the frontend file. Run `lein run` to compile and run the backend, and `lein figwheel` to compile/run the frontend.`lein figwheel` also starts a server from which the generated build will be served.

## Run
1. shadow-cljs build: The server root is given by the `public` directory under this project.Copy the generated `public/js/main.js` for each use case to the respective Javascript directory of the demo as referred by the corresponding index html. For example: for `demo1`, the `public/demo1/index.html` refers to `js/main.js` with a `script` tag. Hence, copy the entire content of `public/js/` to `public/demo1/js/`

2. lein: The server root is given by the `resources/public` directory..Copy the generated `resources/public/js/main.js` for each use case to the respective Javascript directory of the demo as referred by the corresponding index html. For example: for `demo3`, the `resources/public/demo3/index.html` refers to `js/main.js` with a `script` tag. Hence, copy the entire content of `resources/public/js/` to `resources/public/demo1/js/`.



## Test
For shadow-cljs build: open `http://<IP address>:<port>/demo1/index.html` to view the demo.
For lein-figwheel build: open `http://<IP address>:<port>/demo3/index.html` to view the demo.
