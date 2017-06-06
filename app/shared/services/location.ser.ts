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
            $.ajax({
                type : 'GET'
               ,url : this.API_HOST + '/json/'
               
               ,success: (response) => {defer.resolve(response);}
               ,error: (error) => {defer.reject('Something went wrong: ' + error.responseText);} 
            });

            return defer.promise;
        }

        /* Method responsible to retrieve location information based on website address. 
        For example: www.avenuecode.com.br. Therefore, this method takes a host as 
        param and returns all information available about its location on freegeoip.net. */
        public getHostLocation(addr: string): ng.IPromise<any> {
            
            var defer = this.$q.defer();

            if(angular.isString(addr)) {
                $.ajax({
                    type: 'GET'
                ,url: this.API_HOST + '/json/' + addr
                ,success: (response, textStatus, xhr) => { 
                    
                    if(xhr.status === 200) {
                        defer.resolve(response);
                    }
                }
                ,error: (error, textStatus, xhr) => {
                    alert('Opsss! We got ' + error.status + ':' + xhr + ' error for: ' + addr + '. Please, verify the domain and try again!');
                    defer.reject('Something went wrong: ' + error.responseText);
                }
                });
            } 
            
            return defer.promise;
        }


    }
}

app.service("LocationService", ['$http', '$q', Uichallenge.LocationService]);