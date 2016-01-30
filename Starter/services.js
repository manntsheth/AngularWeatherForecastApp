weatherApp.service('cityService', function () {
    this.city = "San Jose, CA";
});

weatherApp.service('weatherService', ['$resource', function ($resource) {
    this.GetWeather = function (city, days) {

        var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=YOUR_API_KEY_HERE", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return weatherAPI.get({
            q: city,
            cnt: days
        });
    };
}]);