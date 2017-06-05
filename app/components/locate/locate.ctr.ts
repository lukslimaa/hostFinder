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

        constructor(private $scope: ng.IScope, 
            private $http: ng.IHttpService, 
            private $q: ng.IQService, 
            private $translate: ng.translate.ITranslateService,
            private locationService: LocationService) {
                
                var ddChoices = $('.dropdown.choices');
                ddChoices.dropdown(); 

                this.resetMyLocation();

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
            this.locationService.getHostLocation(addr).then((data)=>{
                if(data) {this.hostLocation = data;} 
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
