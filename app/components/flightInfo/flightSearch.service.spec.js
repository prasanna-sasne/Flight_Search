describe('FlightSearchService', function() {
    var flightList = [
		{   
            'id':1,
			'originCity':'Pune',
			'destinationCity':'Delhi',
			'originCityCode':'PNQ',
			'desinationCityCode': 'DEL',
			'departDate': 1325408705035, // 01.01.2012 2:35 PM
			'arriveDate': 1325412300000, // 01.01.2012 3:35 PM
			'flightName':'Al-202',
			'fare': 5000,
			'seatsAvailable': 8
		},
		{
            'id':2,
			'originCity':'Delhi',
			'destinationCity':'Pune',
			'originCityCode':'DEL',
			'desinationCityCode': 'PNQ',
			'departDate': 1326186305035, //10.01.2012 2:35 PM
			'arriveDate': 1326189900000, //10.01.2012 3:35 PM
			'flightName':'Al-202',
			'fare': 4000,
			'seatsAvailable': 3
		},
		{
            'id':3,
			'originCity':'Porbandar',
			'destinationCity':'Bengaluru International Airport',
			'originCityCode':'PBD',
			'desinationCityCode': 'BLR',
			'departDate': 1525149000000, // 01.05.2018 10:00 AM
			'arriveDate': 1525152600000, //01.05.2018 11:00 AM
			'flightName':'Al-202',
			'fare': 2000,
			'seatsAvailable': 10 
		},
		{	
            'id':4,
			'originCity':'Bengaluru International Airport',
			'destinationCity':'Porbandar',
			'originCityCode':'BLR',
			'desinationCityCode': 'PBD',
			'departDate': 1525239000000, //02.05.2018 11:00 AM
			'arriveDate': 1525243500000,  //02.05.2018 12:15 PM
			'flightName':'Al-202',
			'fare': 3500,
			'seatsAvailable': 2
        }];
        
    var singleCity = {
            'id':4,
			'originCity':'Bengaluru International Airport',
			'destinationCity':'Porbandar',
			'originCityCode':'BLR',
			'desinationCityCode': 'PBD',
			'departDate': 1525239000000, //02.05.2018 11:00 AM
			'arriveDate': 1525243500000,  //02.05.2018 12:15 PM
			'flightName':'Al-202',
			'fare': 3500,
			'seatsAvailable': 2
    }

    // Load our FlightSearchApp module
    beforeEach(angular.mock.module('FlightSearchApp'));
  
    // Set our injected Users factory (_Flights_) to our local Flights variable
    beforeEach(inject(function(_FlightSearchService_) {
        FlightSearchService = _FlightSearchService_;
    }));
  
    // A simple test to verify the FlightsSearch service exists
    it('should exist', function() {
      expect(FlightSearchService).toBeDefined();
    });
  
    // A set of tests for our Flights.getFlightData() method
    describe('.getFlightData()', function() {
      // A simple test to verify the method all exists
      it('should exist', function() {
        expect(FlightSearchService.getFlightDataTest).toBeDefined();
      });
    });

    //To check getFlightData matches with expected data or not
    it('should return a hard-coded list of users', function() {
        expect(FlightSearchService.getFlightDataTest()).toEqual(flightList);
    });

    describe('.findByCity()', function() {
        // A simple test to verify the method findByCity exists
        it('should exist', function() {
          expect(FlightSearchService.findByCity).toBeDefined();
        });
    });

    //to check whether object is exists or not
    it('should return one city object if it exists', function() {
        expect(FlightSearchService.findByCity('4')).toEqual(singleCity);
    });

    // A test to verify that calling findByCity() with an id that doesn't exist, in this case 'ABC', returns undefined
    it('should return undefined if the user cannot be found', function() {
        expect(FlightSearchService.findByCity('5')).not.toBeDefined();
    });

  });