/// <reference path="../app.d.ts" />

module Uichallenge {

    export class LocateController {

        private employees: any;

        constructor(private $scope: ng.IScope, 
            private $http: ng.IHttpService, 
            private $q: ng.IQService, 
            private $translate: ng.translate.ITranslateService) {
                
                this.employees = {
                    "employees":[
                        {"firstName":"John", "lastName":"Doe"}, 
                        {"firstName":"Anna", "lastName":"Smith"},
                        {"firstName":"Peter", "lastName":"Jones"}
                    ]
                };

        } 

    }
}
app.controller('LocateController', ['$scope', '$http', '$q', '$translate', Uichallenge.LocateController]);