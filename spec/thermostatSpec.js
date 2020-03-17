'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  })

  describe('temperature', function(){
    it('starts at 20', function(){
      expect(thermostat.temperature).toEqual(20);
    })
    it('can increase the temperature', function(){
      expect(thermostat.turnUp()).toEqual(21);
    })
    it('can decrease the temperature', function(){
      expect(thermostat.turnDown()).toEqual(19);
    })
    it('throws error at min temp', function() {
      thermostat.temperature = 10;
      expect(function(){ thermostat.turnDown() }).toThrowError("Minimum temperature reached, bitch")
    })
  })

  describe('power saving', function(){
    it('changes max temp', function(){
      thermostat.powerSave('off')
      expect(thermostat.maximumTemperature).toEqual(32);
    })
    it('raises error for max temp', function(){
      thermostat.powerSave('on');
      thermostat.temperature = 25;
      expect(function() { thermostat.turnUp() }).toThrowError("Maximum temperature reached, slut")
    })
  })

  describe('reset', function(){
    it('can reset to 20', function(){
      thermostat.reset;
      expect(thermostat.temperature).toEqual(20);
    })
  })

  describe('energyUsage', function(){
    it('checks enery usage at 20', function(){
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    })
    it('checks energy usage low', function(){
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('low-usage')
    })
    it('checks enery usage high', function(){
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    })
  })

})
