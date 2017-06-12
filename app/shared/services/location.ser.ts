/// <reference path="../../app.d.ts" />

module Uichallenge {

    export class LocationService {

        /* ---- global variables ---- */
        private API_HOST: string = "http://freegeoip.net";

        constructor(private $http: ng.IHttpService,
            private $q: ng.IQService) {

        }


        /* Method responsible to retrieve user's location information  */
        public getMyLocation(): ng.IPromise<any> {
            
            var defer = this.$q.defer();
            
            this.$http.get(this.API_HOST + '/json/').then(function successCallback(response) {
                defer.resolve(response.data);
            }, function errorcallback(response) {
                alert('Ops! Something went wrong and we did not get your location! [' + response.status + ' : ' + response.statusText + '.');
                defer.reject(response.data);
            });

            return defer.promise;
        }

        /* Method responsible to retrieve location information based on website address. 
        For example: www.avenuecode.com.br. Therefore, this method takes a host as 
        param and returns all information available about its location on freegeoip.net. */
        public getHostLocation(addr: string): ng.IPromise<any> {
            
            var defer = this.$q.defer();

            if(angular.isString(addr)) {
                this.$http.get(this.API_HOST + '/json/' + addr).then(function successCallback(response) {
                    defer.resolve(response.data);
                }, function errorcallback(response) {
                    alert('Ops! We got a ' + response.status + ' : ' + response.statusText + '. Please, check whether you typed the website address correctly and try again!');
                });
            }
            
            return defer.promise;
        }
    }
}

app.service("LocationService", ['$http', '$q', Uichallenge.LocationService]);