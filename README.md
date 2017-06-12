# UI-Challenge

Are you curious about how far a website could be hosted from you? Now you can figure this out! Using this app you will be able to get your location and see the distance between you and a website on the map!

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project have dependencies that require Node 4.4.3 or higher, together with NPM 2.15.1 or higher.

### Installing

Firstly, you have to install all dependencies through npm. No sweat! Just type command below and go take a coffee.
```
npm install
```

After having finished, type the command below to execute your project in a development mode:

```
gulp watch
```

Few seconds later, you will be able to see the application running. Now you can get to work in your project and as you go working in it, code will be processed and updated by gulp automatically.

## Running the tests

I have created a couple of test cases to make sure my application will be working as expected when it goes to production. Therefore, you can run those tests just typing the command below:

```
gulp test
```

In my tests, I used karma + jasmine and you are able to follow the test running through the report which is created always when test runner get started. Check this out in the _coverage_ folder.


## Deployment

As everything so far, deploy this project to your production everionment is completely painless. Type the command below and let gulp to do everything by you:

```
gulp build
```

## Built With

* [GulpJS](https://github.com/gulpjs/gulp/blob/master/docs/API.md) - A tookit for automating tasks in my development workflow.
* [Semantic-UI](https://github.com/semantic-org/semantic-ui/) - UI component framework.
* [AngularJS](https://angularjs.org/) - Web app framework.
* [Typescript](https://www.typescriptlang.org/) - Typed superset of javascript.
* [Karma](http://karma-runner.github.io/1.0/dev/plugins.html) - An essential tool for testing code.
* [Jasmine](https://jasmine.github.io/) - Behavior-Driver JavaScript framework.

## Authors

* **Lucas Lima** - *find me on github* - [lukslimaa](https://github.com/lukslimaa)