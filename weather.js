var weather = require('openweather-apis');

// key: 6c4d68105c30a26731263cc1dc32fb24

function weatherForecast(){
  weather.setAPPID("6c4d68105c30a26731263cc1dc32fb24");
  weather.setLang('en');
  weather.setCity("London");
  var weatherObject = {};
  weather.getTemperature(function(err, temp){
      weatherObject.temperature = temp
        // console.log(temp);
    });
    weather.getDescription(function(err, desc){
        weatherObject.description = desc
    });
    setTimeout(function(){console.log(weatherObject)}, 2000);
}

weatherForecast();
