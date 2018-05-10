angular.module('FlightSearchApp')
	//=========================================================================
	//Flight Search Controller 
	//=========================================================================
	.controller('FlightSearchController', ['$state', 'FlightSearchService', '$filter', '$scope',
		function ($state, FlightSearchService, $filter, $scope) {
			var vm = this;
			vm.flightList;
			vm.arrow = {
				"margin-left": "15%"
			};
			vm.oneWayFlag = true;
			vm.userInput = {
				"originCity": "Origin city",
				"destinationCity": "destination city"
			};
			vm.cityList;
			vm.getFlightData = getFlightData;
			vm.getCityInfo = getCityInfo;
			vm.twoWayFlag = false;
			vm.changeBgColor = changeBgColor;

			$scope.sliderValue = 5000;
			$scope.min = 0;
			$scope.max = 10000;

			init();
			function init() {
				getFlightData();
				vm.changeBgColor('oneWay');
				vm.getCityInfo();
			}

			function changeBgColor(idName) {
				if (idName == 'oneWay') {
					vm.oneWay = 'btn';
					vm.twoWay = 'btn-primary';
					vm.arrow = { "margin-left": "15%" };
					vm.oneWayFlag = true;
					vm.twoWayFlag = false;
					vm.userInput.returnDate = '';

				} else {
					vm.twoWayFlag = true;
					vm.oneWay = 'btn-primary';
					vm.twoWay = 'btn';
					vm.arrow = { "margin-left": "38%" };
					vm.oneWayFlag = false;
				}
				vm.flightList = angular.copy(vm.originalData);
				vm.userInput.originCity = "";
				vm.userInput.destinationCity = '';
			};

			/**
			 *To get flights Data 
			 */
			function getFlightData() {
				FlightSearchService.getFlightData().then(
					function (response) {
						console.log(response);
						var flightList = response;
						vm.flightList = flightList.map(function (value, index) {
							return {
								data: value
							}
						});
						vm.originalData = angular.copy(vm.flightList);
					}, function (error) {
						console.log('error occured');
					});
			}

			/**
			 * Get City Info with it's code 
			 */
			function getCityInfo() {
				FlightSearchService.getCityInfo().then(function (response) {
					vm.cityList = response;
				}, function (error) {
					console.log('error occured');
				})
			}

			/**
			 * Search Flight according to user Requirement
			 */
			vm.searchFlight = function () {
				console.log($scope.sliderValue);

				vm.flightList = $filter('flightSearchFilter')(vm.originalData, vm.userInput.originCity, vm.userInput.destinationCity,
					vm.userInput.departureDate, vm.userInput.passengerCount, $scope.sliderValue);
				if (vm.userInput.returnDate != '' && vm.userInput.returnDate != null) {
					var twoWayFilter = $filter('flightSearchFilter')(vm.originalData, vm.userInput.destinationCity, vm.userInput.originCity,
						vm.userInput.returnDate, vm.userInput.passengerCount, $scope.sliderValue);
					if (vm.flightList.length == 0 && twoWayFilter.length != 0) {
						//angular.copy(vm.flightList, twoWayFilter);
						vm.flightList = twoWayFilter.map(function (value, index) {
							return {
								value: value.data
							}
						});
					} else if (twoWayFilter.length != 0) {
						vm.flightList = vm.flightList.map(function (value, index) {
							return {
								data: value.data,
								value: twoWayFilter[index].data
							}
						});
					}
				}
			};
		}]);