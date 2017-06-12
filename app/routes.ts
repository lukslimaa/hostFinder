/// <reference path="app.d.ts" />

module Uichallenge {
	app.config(function($stateProvider, $urlRouterProvider){
       // $locationProvider.html5Mode({ enabled: true, requireBase: false });
        $urlRouterProvider.otherwise('/locate');
        
        $stateProvider
            .state('locate', {
                url: "/locate",
                templateUrl: "assets/pages/templates/locate.tpl.html"
            })
    });
    
}