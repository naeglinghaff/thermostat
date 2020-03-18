$(document).ready(function() {

  let thermostat = new Thermostat;
  changeValue(thermostat.temperature);
  changeBackground();
  $('#power_saving_mode_on').css("background-color", "green");


  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    var token = '&appid=09e89fd51851bbc9b7a1475aa2d18166';
    var unit = '&units=metric';
    $.get(url + city + token + unit, function(data) {
    $('#currentWeather').text(data.main.temp);
  })
  }

  $('#current-city').change(function () {
    var city = $('#current-city').val();
    displayWeather(city);
  });

  function changeBackground() {
    $('#energyUsage').attr('class', thermostat.energyUsage());
  }

  $("#myButton").click(function (e) {
    alert("Button is Clicked")
  });

  function changeValue(num) {
    $("#temp_display").text(num);
  }

  $("#turn_up").click(function () {
    thermostat.turnUp();
    changeValue(thermostat.temperature);
    changeBackground();
  });

  $("#turn_down").click(function() {
    thermostat.turnDown();
    changeValue(thermostat.temperature);
    changeBackground();
  });

  $('#reset').click(function(){
    thermostat.reset();
    changeValue(thermostat.temperature);
    $('#power_saving_mode_off').css("background-color", "white");
    $('#power_saving_mode_on').css("background-color", "green")
    changeBackground();
  })

  $("#power_saving_mode_on").click(function() {
    thermostat.powerSave('on');
    $("#power_saving_mode_on").css("background-color", "green");
    $("#power_saving_mode_off").css("background-color", "white")
  });

  $("#power_saving_mode_off").click(function() {
    thermostat.powerSave('off');
    $("#power_saving_mode_off").css("background-color", "red")
    $("#power_saving_mode_on").css("background-color", "white");
  })
})
