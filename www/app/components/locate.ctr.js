/// <reference path="../app.d.ts" />
var Uichallenge;
(function (Uichallenge) {
    var LocateController = (function () {
        function LocateController($scope, $http, $q, $translate) {
            this.$scope = $scope;
            this.$http = $http;
            this.$q = $q;
            this.$translate = $translate;
            this.employees = {
                "employees": [
                    { "firstName": "John", "lastName": "Doe" },
                    { "firstName": "Anna", "lastName": "Smith" },
                    { "firstName": "Peter", "lastName": "Jones" }
                ]
            };
        }
        return LocateController;
    }());
    Uichallenge.LocateController = LocateController;
})(Uichallenge || (Uichallenge = {}));
app.controller('LocateController', ['$scope', '$http', '$q', '$translate', Uichallenge.LocateController]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9jYXRlLmN0ci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQ0FBb0M7QUFFcEMsSUFBTyxXQUFXLENBc0JqQjtBQXRCRCxXQUFPLFdBQVc7SUFFZDtRQUlJLDBCQUFvQixNQUFpQixFQUN6QixLQUFzQixFQUN0QixFQUFnQixFQUNoQixVQUEwQztZQUhsQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1lBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWlCO1lBQ3RCLE9BQUUsR0FBRixFQUFFLENBQWM7WUFDaEIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0M7WUFFOUMsSUFBSSxDQUFDLFNBQVMsR0FBRztnQkFDYixXQUFXLEVBQUM7b0JBQ1IsRUFBQyxXQUFXLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxLQUFLLEVBQUM7b0JBQ3RDLEVBQUMsV0FBVyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsT0FBTyxFQUFDO29CQUN4QyxFQUFDLFdBQVcsRUFBQyxPQUFPLEVBQUUsVUFBVSxFQUFDLE9BQU8sRUFBQztpQkFDNUM7YUFDSixDQUFDO1FBRVYsQ0FBQztRQUVMLHVCQUFDO0lBQUQsQ0FuQkEsQUFtQkMsSUFBQTtJQW5CWSw0QkFBZ0IsbUJBbUI1QixDQUFBO0FBQ0wsQ0FBQyxFQXRCTSxXQUFXLEtBQVgsV0FBVyxRQXNCakI7QUFDRCxHQUFHLENBQUMsVUFBVSxDQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9sb2NhdGUuY3RyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL2FwcC5kLnRzXCIgLz5cblxubW9kdWxlIFVpY2hhbGxlbmdlIHtcblxuICAgIGV4cG9ydCBjbGFzcyBMb2NhdGVDb250cm9sbGVyIHtcblxuICAgICAgICBwcml2YXRlIGVtcGxveWVlczogYW55O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgJHNjb3BlOiBuZy5JU2NvcGUsIFxuICAgICAgICAgICAgcHJpdmF0ZSAkaHR0cDogbmcuSUh0dHBTZXJ2aWNlLCBcbiAgICAgICAgICAgIHByaXZhdGUgJHE6IG5nLklRU2VydmljZSwgXG4gICAgICAgICAgICBwcml2YXRlICR0cmFuc2xhdGU6IG5nLnRyYW5zbGF0ZS5JVHJhbnNsYXRlU2VydmljZSkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuZW1wbG95ZWVzID0ge1xuICAgICAgICAgICAgICAgICAgICBcImVtcGxveWVlc1wiOltcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcImZpcnN0TmFtZVwiOlwiSm9oblwiLCBcImxhc3ROYW1lXCI6XCJEb2VcIn0sIFxuICAgICAgICAgICAgICAgICAgICAgICAge1wiZmlyc3ROYW1lXCI6XCJBbm5hXCIsIFwibGFzdE5hbWVcIjpcIlNtaXRoXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1wiZmlyc3ROYW1lXCI6XCJQZXRlclwiLCBcImxhc3ROYW1lXCI6XCJKb25lc1wifVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICB9IFxuXG4gICAgfVxufVxuYXBwLmNvbnRyb2xsZXIoJ0xvY2F0ZUNvbnRyb2xsZXInLCBbJyRzY29wZScsICckaHR0cCcsICckcScsICckdHJhbnNsYXRlJywgVWljaGFsbGVuZ2UuTG9jYXRlQ29udHJvbGxlcl0pOyJdfQ==
