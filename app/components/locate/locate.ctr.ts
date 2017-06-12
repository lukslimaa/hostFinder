/// <reference path="../../app.d.ts" />

module Uichallenge {

    export class LocateController {

        private NOT_AVAILABLE: string = 'Not available';
        public myLocation: any;
        public hostLocation: any;
        public hostAddr: string;
        public now: Date;
        private element: any;

        private searchForm: any;
        private urlRegex: any;

        constructor(private $scope: ng.IScope, 
            private $http: ng.IHttpService, 
            private $q: ng.IQService,
            private $element: any,
            private $translate: ng.translate.ITranslateService,
            private locationService: LocationService) {

                this.myLocation = {};
                this.hostLocation = {};
                this.resetMyLocation();
        }

        /* Method responsible to return all information about the user. */
        public getMyLocation() {
            
            this.now = new Date();
            this.locationService.getMyLocation().then((data) => {
                this.myLocation = data;       
            });
        }

        /* Method responsible to return information about a location based on website domain. */
        public searchLocation(addr:string) {
            if(this.validateURL(addr)) {
                this.locationService.getHostLocation(addr).then((data)=>{
                    if(data) {this.hostLocation = data;} 
                });
            } else {
                this.hostAddr = '';
                this.hostLocation = {};
            }
        }

        /* Method responsible to clean up the information about user's location */
        public resetMyLocation(){
            this.myLocation = '';
        }

        public validateURL(addr: string): boolean{
            var pattern = /^(?!http*).(www)?.?[a-z0-9-]+.+([a-z0-9-]+)?.?([a-z0-9-]+)$/;

            if(!addr || addr === '') {
                alert('You should type a website domain. Try it!');
                return false;
            } else {
                if(!pattern.test(addr)) {alert('http and https prefix not allowed! Please, type a domain such as: www.google.com or avenuecode.com.br');}
                return (pattern.test(addr) ? true : false);
            }

        }
    }
}
app.controller('LocateController', ['$scope', '$http', '$q', '$element', '$translate', 'LocationService', Uichallenge.LocateController]);
