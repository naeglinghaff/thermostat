function Thermostat(){
  this.temperature = 20;
  this.minimumTemperature = 10;
}

Thermostat.prototype.temperature = function() {
  return 20;
}

Thermostat.prototype.turnUp = function() {
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
