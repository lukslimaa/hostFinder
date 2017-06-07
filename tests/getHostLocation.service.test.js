describe('LocationService tests', function () {

    var locationService,
        httpBackend;

    
    beforeEach(function() {
        angular.mock.module('uichallenge');

        inject(function($httpBackend, _locationService_){
            locationService = _locationService_;
            httpBackend = $httpBackend;
        });
    });

    it('LocationService should exist', function() {
        expect(locationService).toBeDefined();
    });
  

}); 