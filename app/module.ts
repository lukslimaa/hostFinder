/// <reference path="app.d.ts" />


var app = angular.module('uichallenge', ['ui.router'
                                        ,'pascalprecht.translate'
                                        ,'angularMoment'
                                        ,'ngMap'], function($compileProvider){
})

.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);
