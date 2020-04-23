var weather = require('openweather-apis');


function weatherForecast(location){
  weather.setAPPID(process.env.APP_ID);
  weather.setLang('en');
  weather.setCity(location);
  var weatherObject = {};

  weather.getTemperature(function(err, temp){
      if (err) {throw err}
      weatherObject.temperature = temp
    });
  weather.getDescription(function(err, desc){
        if (err) {throw err}
        weatherObject.description = desc
    });
setTimeout(function(){ return weatherObject }, 2000);
}

module.exports = {
    weatherForecast: weatherForecast,
  }

// weatherForecast("London")
