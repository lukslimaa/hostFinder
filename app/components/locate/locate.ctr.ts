/// <reference path="../../app.d.ts" />

module Uichallenge {

    export class LocateController {

        private employees: any;
        private myLocation: any;
        private myLocationBkp: any;
        private hostLocation: any;
        private hostAddr: string;

        constructor(private $scope: ng.IScope, 
            private $http: ng.IHttpService, 
            private $q: ng.IQService, 
            private $translate: ng.translate.ITranslateService,
            private locationService: LocationService) {
                
                var ddChoices = $('.dropdown.choices');
                ddChoices.dropdown();

        }

        /* Method responsible to return all information about the user. */
        public getMyLocation() {
            
            if(this.myLocationBkp) {
                this.myLocation = this.myLocationBkp;
            } else {
                this.locationService.getMyLocation().then((data) => {
                    this.myLocation = data;       
                })
            }
        }

        public searchLocation(addr:string){
            this.locationService.getHostLocation(addr).then((data)=>{
                this.hostLocation = data;
                console.log(this.hostLocation);
            });
        }

        /* Method responsible to clean up the information about user's location */
        public resetMyLocation(){
            this.myLocationBkp = this.myLocation;
            this.myLocation = ''; 
        }

    }
}
app.controller('LocateController', ['$scope', '$http', '$q', '$translate', 'LocationService', Uichallenge.LocateController]);
