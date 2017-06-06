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

                /* validate form */
                var form = jQuery('.ui.form');
                this.validateForm(form);

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

        /* Method responsible to return information about a location based on website domain. */
        public searchLocation(addr:string){
            var isUrlValid = this.searchForm.$valid;
            if(isUrlValid) {
                this.locationService.getHostLocation(addr).then((data)=>{
                    if(data) {this.hostLocation = data;} 
                });
            }
        }

        /* Method responsible to clean up the information about user's location */
        public resetMyLocation(){
            this.myLocationBkp = this.myLocation;
            this.myLocation = '';
        }

        public validateForm(form){
            
            form.form({
                fields: {
                    searchBox:{
                        identifier: 'searchBox',
                        rules: [
                            {
                                type: 'empty',
                                prompt: 'Please type a valid domain.'
                            },
                            {
                                type   : 'regExp[/^(?!http*).(www)?.?[a-z0-9-]+.+([a-z0-9-]+)?.?([a-z0-9-]+)$/]',
                                prompt : 'You should type a valid domain, e.g.: avenuecode.com.br or www.avenuecode.com.br'
                            }
                        ]
                    }
                }
            });
        }

    }
}
app.controller('LocateController', ['$scope', '$http', '$q', '$translate', 'LocationService', Uichallenge.LocateController]);
