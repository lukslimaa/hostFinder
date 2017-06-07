describe('LocationService tests', function () {

    var LocationService,
        httpBackend;

    
    beforeEach(function() {
        angular.mock.module('uichallenge');

        inject(function($httpBackend, _LocationService_){
            LocationService = _LocationService_;
            httpBackend = $httpBackend;
        });
    });

    it('LocationService should exist', function() {
        expect(LocationService).toBeDefined();
    });
  

}); 