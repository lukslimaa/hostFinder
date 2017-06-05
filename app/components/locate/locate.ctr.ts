/// <reference path="../../app.d.ts" />

module Uichallenge {

    export class LocateController {

        private NOT_AVAILABLE: string = 'Not available';
        private employees: any;
        private myLocation: any;
        private myLocationBkp: any;
        private hostLocation: any;
        private hostAddr: string;
        private now: Date;

        private searchForm: any;
        private urlRegex: any;

        constructor(private $scope: ng.IScope, 
            private $http: ng.IHttpService, 
            private $q: ng.IQService, 
            private $translate: ng.translate.ITranslateService,
            private locationService: LocationService) {
                
                var ddChoices = $('.dropdown.choices');
                ddChoices.dropdown(); 

                this.resetMyLocation();
                this.urlRegex = /^(?!http*).(www)?.?[a-z0-9-]+.+([a-z0-9-]+)?.?([a-z0-9-]+)$/;

        }

        /* Method responsible to return all information about the user. */
        public getMyLocation() {
            
            this.now = new Date();

            if(this.myLocationBkp) {
                this.myLocation = this.myLocationBkp;
            } else {
                this.locationService.getMyLocation().then((data) => {
                    this.myLocation = data;       
                })
            }
        }

        public searchLocation(addr:string){
            var isUrlValid = this.searchForm.input.$valid;
            
            if(isUrlValid) {
                this.locationService.getHostLocation(addr).then((data)=>{
                    if(data) {this.hostLocation = data;} 
                });
            } else {
                alert('Please, type a valid address, e.g.: www.google.com or google.com');
            }
        }

        /* Method responsible to clean up the information about user's location */
        public resetMyLocation(){
            this.myLocationBkp = this.myLocation;
            this.myLocation = '';
        }

    }
}
app.controller('LocateController', ['$scope', '$http', '$q', '$translate', 'LocationService', Uichallenge.LocateController]);
