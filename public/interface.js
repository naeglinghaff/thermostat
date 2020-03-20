$(document).ready(function() {

  let thermostat = new Thermostat();
  let city = $('#current-city').val();
  let temperature = thermostat.temperature;
  let powermode = thermostat.powermode;
  changeValue(temperature);
  $('#power_saving_mode_on').css("background-color", "green");

  function onload() {
    
  }

  function displayWeather(city) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    let token = '&appid=09e89fd51851bbc9b7a1475aa2d18166';
    let unit = '&units=metric';
    $.get(url + city + token + unit, function(data) {
    $('#currentWeather').text(data.main.temp);
    })
  }

  $('#current-city').change(function () {
    displayWeather(city);
    thermostat.saveData(temperature, city, powermode);
  });

  function changeValue(num) {
    $("#temp_display").text(num);
  }

  $("#turn_up").click(function () {
    thermostat.turnUp();
    changeValue(thermostat.temperature);
    thermostat.saveData(temperature, city, powermode);
  });

  $("#turn_down").click(function() {
    thermostat.turnDown();
    changeValue(thermostat.temperature);
    thermostat.saveData(temperature, city, powermode);
  });

  $('#reset').click(function(){
    thermostat.reset();
    changeValue(thermostat.temperature);
    $('#power_saving_mode_off').css("background-color", "white");
    $('#power_saving_mode_on').css("background-color", "green")
  })

  $("#power_saving_mode_on").click(function() {
    thermostat.powerSave('on');
    $("#power_saving_mode_on").css("background-color", "green");
    $("#power_saving_mode_off").css("background-color", "white")
    thermostat.saveData(temperature, city, powermode);
  });

  $("#power_saving_mode_off").click(function() {
    thermostat.powerSave('off');
    $("#power_saving_mode_off").css("background-color", "red")
    $("#power_saving_mode_on").css("background-color", "white");
    thermostat.saveData(temperature, city, powermode);
  })
})
