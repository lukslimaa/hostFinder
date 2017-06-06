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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFFakMsSUFBTyxhQUFhLENBWW5CO0FBWkQsV0FBTyxhQUFhO0lBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsVUFBUyxjQUFjLEVBQUUsa0JBQWtCO1FBQ2hELHNFQUFzRTtRQUNyRSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFeEMsY0FBYzthQUNULEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDYixHQUFHLEVBQUUsU0FBUztZQUNkLFdBQVcsRUFBRSx3Q0FBd0M7U0FDeEQsQ0FBQyxDQUFBO0lBQ1YsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLEVBWk0sYUFBYSxLQUFiLGFBQWEsUUFZbkIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cImFwcC5kLnRzXCIgLz5cclxuXHJcbm1vZHVsZSBUb21lZGVzY29udG9zIHtcclxuXHRhcHAuY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpe1xyXG4gICAgICAgLy8gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHsgZW5hYmxlZDogdHJ1ZSwgcmVxdWlyZUJhc2U6IGZhbHNlIH0pO1xyXG4gICAgICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9sb2NhdGUnKTtcclxuICAgICAgICBcclxuICAgICAgICAkc3RhdGVQcm92aWRlclxyXG4gICAgICAgICAgICAuc3RhdGUoJ2xvY2F0ZScsIHtcclxuICAgICAgICAgICAgICAgIHVybDogXCIvbG9jYXRlXCIsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhc3NldHMvcGFnZXMvdGVtcGxhdGVzL2xvY2F0ZS50cGwuaHRtbFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9KTtcclxuICAgIFxyXG59Il19
