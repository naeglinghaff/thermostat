
function Thermostat(){
  this.temperature = 20;
}

Thermostat.prototype.temperature = function() {
  return 20;
}

Thermostat.prototype.turnUp = function() {
  this.temperature++;
  return this.temperature;
}
