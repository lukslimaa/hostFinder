/// <reference path="app.d.ts" />
var Tomedescontos;
(function (Tomedescontos) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode({ enabled: true, requireBase: false });
        $urlRouterProvider.otherwise('/locate');
        $stateProvider
            .state('locate', {
            url: "/locate",
            templateUrl: "assets/pages/templates/locate.tpl.html"
        });
    });
})(Tomedescontos || (Tomedescontos = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFFakMsSUFBTyxhQUFhLENBWW5CO0FBWkQsV0FBTyxhQUFhO0lBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBUyxjQUFjLEVBQUUsa0JBQWtCO1FBQ2hELHNFQUFzRTtRQUNyRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEMsY0FBYzthQUNULEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDYixHQUFHLEVBQUUsU0FBUztZQUNkLFdBQVcsRUFBRSx3Q0FBd0M7U0FDeEQsQ0FBQyxDQUFBO0lBQ1YsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLEVBWk0sYUFBYSxLQUFiLGFBQWEsUUFZbkIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImFwcC5kLnRzXCIgLz5cblxubW9kdWxlIFRvbWVkZXNjb250b3Mge1xuXHRhcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xuICAgICAgIC8vICRsb2NhdGlvblByb3ZpZGVyLmh0bWw1TW9kZSh7IGVuYWJsZWQ6IHRydWUsIHJlcXVpcmVCYXNlOiBmYWxzZSB9KTtcbiAgICAgICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL2xvY2F0ZScpO1xuICAgICAgICBcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnbG9jYXRlJywge1xuICAgICAgICAgICAgICAgIHVybDogXCIvbG9jYXRlXCIsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiYXNzZXRzL3BhZ2VzL3RlbXBsYXRlcy9sb2NhdGUudHBsLmh0bWxcIlxuICAgICAgICAgICAgfSlcbiAgICB9KTtcbiAgICBcbn0iXX0=
