# Todo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



*****************************


commands + zugehörige files and what they mean

source/app/app.component.html: actual content of the app page is coming from there

frontend/todo/.eslintrc.json: rules for linting

karma.conf.js: This is the configuration of the test-runner, which is karma.
(file-suche: cmd p)


*********

weiter:
wichtige folders / files

* src/app: all our code

* assets: all images
* environments: config 4 envs (prod, test…)

* tsconfig.json: browser versteht nur js, kein ts => config für converting ts to js
    "Tsconfig.JSON defines how we would want to convert the TypeScript code we would write to JavaScript code which runs on the browser."

* package.json: ng lint, ng build, ng test and ng e2e.
    And all these things need a lot of external frameworks and tools. All these frameworks and tools are specified in the package.json auch DEPENDENCIES => whatever you have defined in package.json is downloaded to node_modules ordner when you run NPM install, node package manager => wie mvn und POM

* main.ts und index.html: both loaded when we launch the Angular app 
    (So these are responsible for bootstrapping the Angular app (by means of the root module))

* pollyfills.ts: LÖST browser-incompatibility problem:
    "We know that different browsers have different levels of support for all the web standards
    the same JavaScript code might not work in all the browsers, polyfills.ts 
    would take care of these browser incompatibilities and make sure that whatever code
    that we write would be compatible with all the browsers."

* styles.css: GLOBAL application styles => whatever styles you'd want to use across the application

* test.ts: starting point for unit test (used when we run ng test)