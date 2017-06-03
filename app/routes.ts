/// <reference path="app.d.ts" />

module Tomedescontos {
	app.config(function($stateProvider, $urlRouterProvider){
       // $locationProvider.html5Mode({ enabled: true, requireBase: false });
        $urlRouterProvider.otherwise('/home');
        
        $stateProvider
            .state('home', {
                url: "/home",
                templateUrl: "assets/pages/templates/promolist.tpl.html"
            })
            // .state('detail', {
            //     url: "/promocao/:title",
            //     templateUrl: "assets/pages/templates/promoDetail.tpl.html"
            // });
    });
    
}