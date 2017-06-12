/// <reference path="../../app.d.ts" />

module Uichallenge {

    export class LocateController {

        private NOT_AVAILABLE: string = 'Not available';
        public myLocation: any;
        public hostLocation: any;
        public hostAddr: string;
        public now: Date;
        private form: any;

        private searchForm: any;
        private urlRegex: any;

        constructor(private $scope: ng.IScope, 
            private $http: ng.IHttpService, 
            private $q: ng.IQService, 
            private $translate: ng.translate.ITranslateService,
            private locationService: LocationService) {

                this.myLocation = {};
                this.hostLocation = {};

                /* validate form */
                this.searchForm = jQuery('.ui.form');
    
                this.resetMyLocation();
                this.urlRegex = /^(?!http*).(www)?.?[a-z0-9-]+.+([a-z0-9-]+)?.?([a-z0-9-]+)$/;
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
            
            // this.validateForm();
            //var isUrlValid = this.searchForm.$valid;
            var patt = /^(?!http*).(www)?.?[a-z0-9-]+.+([a-z0-9-]+)?.?([a-z0-9-]+)$/;
            var isUrlValid = patt.test(addr);

            if(addr && isUrlValid) {
                this.locationService.getHostLocation(addr).then((data)=>{
                    if(data) {this.hostLocation = data;} 
                });
            }
        }

        /* Method responsible to clean up the information about user's location */
        public resetMyLocation(){
            this.myLocation = '';
        }

        public validateForm(form){
            this.hostAddr
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
