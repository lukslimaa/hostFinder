/// <reference path="../app.d.ts" />

describe('Locate Controller', () => {
    
    var $rootScope: ng.IRootScopeService;
    var $scope: ng.IScope;
    var $controller: Uichallenge.LocateController;
    var service: Uichallenge.LocationService;

    var mockMyLocation = {
        ip:"189.45.87.150",
        country_code:"BR",
        country_name:"Brazil",
        region_code:"CE",
        region_name:"Ceara",
        city:"Fortaleza",
        zip_code:"",
        time_zone:"America/Fortaleza",
        latitude:-3.7183,
        longitude:-38.5428,
        metro_code:0
    };

    var mockAvenueCodeLocation = {
        ip:"34.202.120.198",
        country_code:"US",
        country_name:"United States",
        region_code:"VA",
        region_name:"Virginia",
        city:"Ashburn",
        zip_code:"20149",
        time_zone:"America/New_York",
        latitude:39.0481,
        longitude:-77.4729,
        metro_code:511
    };

    beforeEach(angular.mock.module('uichallenge'));

    beforeEach(inject((_$rootScope_, _$controller_, _$q_, _LocationService_) => {

        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $controller = _$controller_;
        service = _LocationService_;

        var websiteDeferred = _$q_.defer();
        websiteDeferred.resolve(mockMyLocation);
        spyOn(service, 'getMyLocation').and.returnValue(websiteDeferred.promise);

        var avenueCodeDeferred = _$q_.defer();
        avenueCodeDeferred.resolve(mockAvenueCodeLocation);
        spyOn(service, 'getHostLocation').and.returnValue(avenueCodeDeferred.promise)

        $controller = _$controller_('LocateController', {$scope: $scope, $rootScope: $rootScope, locationService: service});
    }));

    it('should get my controller and methods defined', ()=>{
        expect($controller).toBeDefined;
        expect(service).toBeDefined;
        expect($controller.getMyLocation).toBeDefined; //method which get my current location
        expect($controller.resetMyLocation).toBeDefined; //method which set myLocation variable to ''
        expect($controller.searchLocation).toBeDefined; //method which searchs a location based on domain
    });

    describe('getMyLocation method', () => {

        it('should timestamp changes when calling method', ()=>{
            expect($controller.now).toBeUndefined(); // Date shouldn't exist before calling method
            $controller.getMyLocation();
            var date = new Date();
            expect($controller.now.getHours()).toBe(date.getHours()); // Date should exist now!
        });

        it('should myLocation value changes when calling method', ()=>{
            expect($controller.myLocation).toBe(''); 
            $controller.getMyLocation();
            $scope.$apply();
            expect($controller.myLocation).not.toBe('');
        });

        it('should myLocation values match', ()=>{
            expect($controller.myLocation.ip).toBeUndefined();
            $controller.getMyLocation();
            $scope.$apply();
            expect($controller.myLocation.ip).toBe('189.45.87.150');
            expect($controller.myLocation.latitude).toBe(-3.7183);
        });
        
    });

    describe('resetMyLocation method', () => {

        it('should reset a existing location in myLocation variable', ()=>{
            $controller.getMyLocation();
            $scope.$apply();
            expect($controller.myLocation).toEqual(mockMyLocation); //myLocation populated
            $controller.resetMyLocation(); 
            expect($controller.myLocation).toEqual(''); //myLocation reseted successfully
        });

        it('should reset myLocation, but not host location', () => {
            $controller.getMyLocation();
            $controller.searchLocation('www.avenuecode.com.br');
            $scope.$apply();
            
            /* here we have both of variables well defined (myLocation and a location related to avenuecode.com.br) */
            expect($controller.myLocation).toEqual(mockMyLocation);
            expect($controller.hostLocation).toEqual(mockAvenueCodeLocation);

            /* reseting my location and ensuring that host location is still there */
            $controller.resetMyLocation();
            expect($controller.myLocation).toBe('');
            expect($controller.hostLocation).toBe(mockAvenueCodeLocation);
        });

    });

}); 