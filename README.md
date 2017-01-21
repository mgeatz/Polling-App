# Simple Polling Application

[![Build Status](https://travis-ci.org/mgeatz/pollingApp-Angular1.svg?branch=master)](https://travis-ci.org/mgeatz/pollingApp-Angular1) [![codecov](https://codecov.io/gh/mgeatz/pollingApp-Angular1/branch/master/graph/badge.svg)](https://codecov.io/gh/mgeatz/pollingApp-Angular1)

This project is a responsive polling application, asking a yes / no question, the data and geo from which is aggregated by State 
and displayed on an interactive USA map. This application uses AngularJS version 1.6.1, Jasmine and Karma for Angular unit testing, 
Jasmine and Protractor for Angular end-to-end testing, SASS, Gulp for transpilation, Travis for CI/CD, Heroku, RESTful API written in Java, 
Cucumber for API tests.

Demonstrates knowledge of:

AngularJS 1.6.1
Karma
Jasmine
Protractor

## Getting Started

To test this application locally you can simply clone the repository and install the dependencies. You must have Node.js
and NPM installed. 

Clone the repository using git:

```
git clone https://github.com/mgeatz/pollingApp-Angular1.git
```

If you just want to start a new project without my commit history then you can do:

```
git clone --depth=1 https://github.com/mgeatz/pollingApp-Angular1.git <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

```
npm install
```

### Run the Application

```
npm start
```

See it at [`localhost:8000/index.html`][local-app-url].

## Testing

There are two kinds of tests here: Unit tests and end-to-end tests.

#### Running Unit Tests

The unit tests are written in [Jasmine][jasmine], and ran with the [Karma][karma] test runner. 
 
Run all the unit tests using this npm script:

```
npm test
```

Run a single unit test and then exit using this npm script:

```
npm run test-single-run
```


<a name="e2e-testing"></a>
#### Running End-to-End Tests

The end-to-end tests are written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner. 

Before running e2e tests, make sure you've start the web server.

If you need to update the WebDriver, use this script:

```
npm run update-webdriver
```

Once the development web server hosting the application is up and running, you
can run the end-to-end tests using the this npm script:

```
npm run protractor
```
