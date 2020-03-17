$(document).ready(function() {

  let thermostat = new Thermostat;
  changeValue(thermostat.temperature);

  $("#myButton").click(function (e) {
    alert("Button is Clicked")
  });

  function changeValue(num) {
    $("#temp_display").text(num);
  }

  $("#turn_up").click(function () {
    thermostat.turnUp();
    changeValue(thermostat.temperature);
  });

  $("#turn_down").click(function() {
    thermostat.turnDown();
    changeValue(thermostat.temperature);
  });

  $('#reset').click(function(){
    thermostat.reset();
    changeValue(thermostat.temperature);
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
