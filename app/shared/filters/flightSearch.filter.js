angular.module('FlightSearchApp')
    //=========================================================================
    //FlightSearchApp Filter
    //=========================================================================
    .filter('flightSearchFilter', function () {
        return function (flightData, originCity, destCity, departurDate, passengerCount, fareRange) {
            var filteredFlightData = [];
            for (var index = 0; index < flightData.length; index++) {
                var originCityFlag = true;
                var destCityFlag = true;
                var departurDatePickerFlag = true;
                var returnDateFlag = true;
                var passengerCountFlag = true;
                var fareRangeFlag = true;

                var originCityCode = flightData[index].data.originCityCode;
                if (originCity !== null && originCity !== '' && originCity !== undefined
                    && (originCityCode.indexOf(originCity.toUpperCase()) === -1)) {
                    originCityFlag = false;
                }

                var destCityCode = flightData[index].data.desinationCityCode;
                if (destCity !== null && destCity !== '' && destCity !== undefined
                    && (destCityCode.indexOf(destCity.toUpperCase()) === -1)) {
                    destCityFlag = false;
                }

                if (departurDate !== null && departurDate !== '' && departurDate !== undefined && !isNaN(departurDate)) {
                    datePickerDepartureDate = departurDate.getFullYear() + '' + ('0' + (departurDate.getMonth() + 1)).slice(-2) + '' + ('0' + departurDate.getDate()).slice(-2);
                    departureDateDb = new Date(flightData[index].data.departDate);
                    departureDateDb = departureDateDb.getFullYear() + '' + ('0' + (departureDateDb.getMonth() + 1)).slice(-2) + '' + ('0' + departureDateDb.getDate()).slice(-2);
                }
                if (departurDate !== null && departurDate !== '' && departurDate !== undefined && !isNaN(departurDate)
                    && (departureDateDb !== datePickerDepartureDate)) {
                    departurDatePickerFlag = false;
                }

                if (passengerCount !== '' && passengerCount !== null && passengerCount !== undefined && (passengerCount > flightData[index].data.seatsAvailable)) {
                    passengerCountFlag = false;
                }

                if (fareRange !== '' && fareRange !== null && fareRange !== undefined && (fareRange < flightData[index].data.fare)) {
                    fareRangeFlag = false;
                }

                if (originCityFlag && destCityFlag && departurDatePickerFlag && passengerCountFlag && fareRangeFlag) {
                    filteredFlightData.push(flightData[index])
                }

            }
            return filteredFlightData;
        }
    });