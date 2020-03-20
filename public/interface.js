$(document).ready(function() {

  let thermostat = new Thermostat();

  function load() {
    thermostat.load(function (data) {
      thermostat.temperature = parseInt(data.temperature);
      $("#temp_display").text(thermostat.temperature);
      thermostat.powermode = data.powermode;
      if (thermostat.powermode === true) { $("#power_saving_mode_on").css("background-color", "green"); }
      else if (thermostat.powermode === false) { $("#power_saving_mode_off").css("background-color", "red"); }
      console.log(thermostat.powermode);
    })}

  load();

  let temperature = thermostat.temperature;
  let powermode = thermostat.powermode;
  changeValue(temperature);

  function displayWeather(city) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    let token = '&appid=09e89fd51851bbc9b7a1475aa2d18166';
    let unit = '&units=metric';
    $.get(url + city + token + unit, function(data) {
    $('#currentWeather').text(data.main.temp);
    })
  }

  $('#current-city').change(function () {
    let city = $('#current-city').val();
    displayWeather(city);
    thermostat.saveData(temperature, city, powermode);
  });

  function changeValue(num) {
    $("#temp_display").text(num);
  }

  $("#turn_up").click(function () {
    let city = $('#current-city').val();
    thermostat.turnUp();
    changeValue(thermostat.temperature);
    thermostat.saveData(temperature, city, powermode);
  });

  $("#turn_down").click(function() {
    let city = $('#current-city').val();
    thermostat.turnDown();
    changeValue(thermostat.temperature);
    thermostat.saveData(temperature, city, powermode);
  });

  $('#reset').click(function(){
    let city = $('#current-city').val();
    thermostat.reset();
    changeValue(thermostat.temperature);
    $('#power_saving_mode_off').css("background-color", "white");
    $('#power_saving_mode_on').css("background-color", "green")
    thermostat.saveData(temperature, city, powermode);
  })

  $("#power_saving_mode_on").click(function() {
    let city = $('#current-city').val();
    thermostat.powerSave('on');
    thermostat.powermode = true;
    $("#power_saving_mode_on").css("background-color", "green");
    $("#power_saving_mode_off").css("background-color", "white")
    thermostat.saveData(temperature, city, powermode);
  });

  $("#power_saving_mode_off").click(function() {
    let city = $('#current-city').val();
    thermostat.powerSave('off');
    thermostat.powermode = false;
    $("#power_saving_mode_off").css("background-color", "red")
    $("#power_saving_mode_on").css("background-color", "white");
    thermostat.saveData(temperature, city, powermode);
  })

})
