function Thermostat(){
  this.temperature = 20;
  this.minimumTemperature = 10;
  this.maximumTemperature = 25;
  this.energyLevel = 'medium-usage';
}

Thermostat.prototype.energyUsage = function(){
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

Thermostat.prototype.powerSave = function(choice){
  if (choice === 'on'){
    this.maximumTemperature = 25;
  } else {
    this.maximumTemperature = 32;
  };
}

Thermostat.prototype.reset = function(){
  return this.temperature = 20;
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
