/// <reference path="app.d.ts" />
var Tomedescontos;
(function (Tomedescontos) {
    app.config(function ($stateProvider, $urlRouterProvider) {
        // $locationProvider.html5Mode({ enabled: true, requireBase: false });
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
            url: "/home",
            templateUrl: "assets/pages/templates/promolist.tpl.html"
        });
        // .state('detail', {
        //     url: "/promocao/:title",
        //     templateUrl: "assets/pages/templates/promoDetail.tpl.html"
        // });
    });
})(Tomedescontos || (Tomedescontos = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQ0FBaUM7QUFFakMsSUFBTyxhQUFhLENBZ0JuQjtBQWhCRCxXQUFPLGFBQWE7SUFDbkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxVQUFTLGNBQWMsRUFBRSxrQkFBa0I7UUFDaEQsc0VBQXNFO1FBQ3JFLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV0QyxjQUFjO2FBQ1QsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNYLEdBQUcsRUFBRSxPQUFPO1lBQ1osV0FBVyxFQUFFLDJDQUEyQztTQUMzRCxDQUFDLENBQUE7UUFDRixxQkFBcUI7UUFDckIsK0JBQStCO1FBQy9CLGlFQUFpRTtRQUNqRSxNQUFNO0lBQ2QsQ0FBQyxDQUFDLENBQUM7QUFFUCxDQUFDLEVBaEJNLGFBQWEsS0FBYixhQUFhLFFBZ0JuQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiYXBwLmQudHNcIiAvPlxuXG5tb2R1bGUgVG9tZWRlc2NvbnRvcyB7XG5cdGFwcC5jb25maWcoZnVuY3Rpb24oJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcil7XG4gICAgICAgLy8gJGxvY2F0aW9uUHJvdmlkZXIuaHRtbDVNb2RlKHsgZW5hYmxlZDogdHJ1ZSwgcmVxdWlyZUJhc2U6IGZhbHNlIH0pO1xuICAgICAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaG9tZScpO1xuICAgICAgICBcbiAgICAgICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiL2hvbWVcIixcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVVybDogXCJhc3NldHMvcGFnZXMvdGVtcGxhdGVzL3Byb21vbGlzdC50cGwuaHRtbFwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8gLnN0YXRlKCdkZXRhaWwnLCB7XG4gICAgICAgICAgICAvLyAgICAgdXJsOiBcIi9wcm9tb2Nhby86dGl0bGVcIixcbiAgICAgICAgICAgIC8vICAgICB0ZW1wbGF0ZVVybDogXCJhc3NldHMvcGFnZXMvdGVtcGxhdGVzL3Byb21vRGV0YWlsLnRwbC5odG1sXCJcbiAgICAgICAgICAgIC8vIH0pO1xuICAgIH0pO1xuICAgIFxufSJdfQ==
