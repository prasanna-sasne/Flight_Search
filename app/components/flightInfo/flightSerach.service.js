angular.module('FlightSearchApp')
//=========================================================================
//Flight Search Service 
//=========================================================================
.factory('FlightSearchService', ['$http', '$q', function($http, $q){
	var FlightSearchService = {};
	var flightData = [
		{	'id':1,
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

	FlightSearchService.getFlightData = function(){
		var deferred = $q.defer();
		deferred.resolve(flightData);
		return deferred.promise;
	};
	
	FlightSearchService.getFlightDataTest = function(){
		return flightData;
	};

	FlightSearchService.findByCity = function(id){
		return flightData.find(function(flight) {
			return flight.id == id;
		});
	};

	FlightSearchService.getCityInfo = function(){
			var deferred = $q.defer();
			var cityArray = [
				{"name": "Pune", "code": "PNQ"},
				{"name": "Porbandar Airport","code": "PBD"},
				{"name": "Delhi", "code": "DEL"},
				{"name": "Vijayanagar Aerodrome (JSW)", "code": "VDY"},
				{"name": "Bengaluru International Airport", "code":"BLR"},
				{"name": "Vijayawada Airport", "code":"VGA"},
				{"name": "Rajiv Gandhi International Airport, Shamshabad", "code":"HYD"}
				];
			deferred.resolve(cityArray);	
			return deferred.promise;
	};
	
	return FlightSearchService;
	
}]);