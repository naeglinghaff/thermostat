'use strict';

class Thermostat {

  constructor() {
  this.temperature = 20,
  this.minimumTemperature = 10,
  this.maximumTemperature = 25,
  this.powermode =true,
  this.energyLevel = 'medium-usage';
}

energyUsage() {
  if (this.temperature < 18) {
    this.energyLevel = 'low-usage';
    return this.energyLevel;
  } else if (this.temperature < 25) {
    this.energyLevel = 'medium-usage';
    return this.energyLevel;
  } else {
    this.energyLevel = 'high-usage';
    return this.energyLevel;
  }
}

  powerSave(choice) {
    if (choice === 'on'){
      this.maximumTemperature = 25;
      this.powermode = true;
    } else {
      this.maximumTemperature = 32;
      this.powermode = false;
    };
    return this.powermode;
  }

  reset() {
    return this.temperature = 20;
  }

  turnUp() {
    if (this.maximumTemperature === this.temperature) {
      throw new Error("Maximum temperature reached")
    }
    this.temperature++;
    return this.temperature;
  }

  turnDown() {
    if (this.minimumTemperature === this.temperature) {
      throw new Error("Minimum temperature reached")
    }
    this.temperature--;
    return this.temperature;
  }

  saveData(temperature, city, powermode) {
    $.post("http://localhost:9292/thermostat", { temperature: this.temperature, city: city, powermode: this.powermode } );
  }

  load(callback){
    $.get("http://localhost:9292/thermostat", function(response) {
      var data = JSON.parse(response)
      callback(data);
    });
  }
}
