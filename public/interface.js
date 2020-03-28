'use strict';

$(document).ready(function() {

  let thermostat = new Thermostat();
  let temperature = thermostat.temperature;
  changeValue(temperature);
  let powermode = thermostat.powermode;

  function displayWeather(city) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    let token = API;
    let unit = '&units=metric';
    $.get(url + city + token + unit, function(data) {
    $('#currentWeather').text(data.main.temp);
    })
  }

  $('#current-city').change(function () {
    let city = $('#current-city').val();
    $("#display-city").text(city);
    displayWeather(city);
    thermostat.saveData(temperature, city, powermode);
  });

  function changeValue(num) {
    $("#temp_display").text(num);
  }

  $('#turnUp').click(function () {
    let city = $('#current-city').val();
    thermostat.turnUp();
    changeValue(thermostat.temperature);
    thermostat.saveData(temperature, city, powermode);
  });

  $('#turnDown').click(function() {
    let city = $('#current-city').val();
    thermostat.turnDown();
    changeValue(thermostat.temperature);
    thermostat.saveData(temperature, city, powermode);
  });

  $('#reset').click(function(){
    let city = $('#current-city').val();
    changeValue(thermostat.reset());
    $('#power_saving_mode').css("background-color", "green");
    thermostat.saveData(temperature, city, powermode);
  })

  $('#power_saving_mode').click(function() {
    let city = $('#current-city').val();
    let check = thermostat.powermode;
    console.log(check);
    let value = checkValue(check);
    console.log(value);
    thermostat.powerSave(value);
    checkPowerMode();
    thermostat.saveData(temperature, city, powermode);
  });

  function checkValue(check){
    let value;
    if (check === true) {
      value = 'off';
    } else if (check === false) {
      value = 'on';
    }
    return value;
  }

  function checkPowerMode() {
    if (thermostat.powermode === true) {
      $('#power_saving_mode').css("background-color", "green");
    } else if (thermostat.powermode === false){
      $('#power_saving_mode').css("background-color", "white");
    };
  }

  function load() {
    thermostat.load(function (data) {
      thermostat.temperature = parseInt(data.temperature);
      $("#temp_display").text(thermostat.temperature);
      thermostat.powermode = data.powermode;
      console.log(thermostat.powermode);
      let city = data.city;
      displayWeather(city)
      $("#display-city").text(city);
    })
  }

  load();
});
