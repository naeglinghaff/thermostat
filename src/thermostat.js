function Thermostat(){
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
}

Thermostat.prototype.powerSave = function(choice){
  if (choice === 'on'){
    this.maximumTemperature = 25;
  } else {
    this.maximumTemperature = 32;
  };
}

Thermostat.prototype.temperature = function() {
  return 20;
}

Thermostat.prototype.turnUp = function() {
  if (this.maximumTemperature === this.temperature) {
    throw new Error("Maximum temperature reached, slut")
  }
  this.temperature++;
  return this.temperature;
}

Thermostat.prototype.turnDown = function() {
  if (this.minimumTemperature === this.temperature) {
    throw new Error("Minimum temperature reached, bitch")
  }
  this.temperature--;
  return this.temperature;
}
