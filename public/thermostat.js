class Thermostat {

  constructor() {
  this.temperature = 20,
  this.minimumTemperature = 10,
  this.maximumTemperature = 25,
  this.powermode = true,
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
    } else {
      this.maximumTemperature = 32;
    };
  }

  reset() {
    return this.temperature = 20;
  }

  turnUp() {
    if (this.maximumTemperature === this.temperature) {
      throw new Error("Maximum temperature reached, nugget")
    }
    this.temperature++;
    return this.temperature;
  }

  turnDown() {
    if (this.minimumTemperature === this.temperature) {
      throw new Error("Minimum temperature reached, noodle")
    }
    this.temperature--;
    return this.temperature;
  }

  saveData(temperature, city, powermode) {
    console.log("heeeey");
    $.post("http://localhost:4567/thermostat", { temperature: this.temperature, city: city, powermode: this.powermode } );
  }

}
