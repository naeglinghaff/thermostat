'use strict';

describe('Thermostat', () => {
  var thermostat;

  beforeEach( () => {
    thermostat = new Thermostat;
  })

  describe('temperature', () => {
    it('starts at 20', () => {
      expect(thermostat.temperature).toEqual(20);
    })
    it('can increase the temperature', () => {
      expect(thermostat.turnUp()).toEqual(21);
    })
    it('can decrease the temperature', () => {
      expect(thermostat.turnDown()).toEqual(19);
    })
    it('throws error at min temp', () => {
      thermostat.temperature = 10;
      expect( () => { thermostat.turnDown() }).toThrowError("Minimum temperature reached, bitch")
    })
  })

  describe('power saving', () => {
    it('changes max temp', () => {
      thermostat.powerSave('off')
      expect(thermostat.maximumTemperature).toEqual(32);
    })
    it('raises error for max temp', () => {
      thermostat.powerSave('on');
      thermostat.temperature = 25;
      expect(() => { thermostat.turnUp() }).toThrowError("Maximum temperature reached, slut")
    })
  })

  describe('reset', () => {
    it('can reset to 20', () => {
      thermostat.reset;
      expect(thermostat.temperature).toEqual(20);
    })
  })

  describe('energyUsage', () => {
    it('checks enery usage at 20', () => {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    })
    it('checks energy usage low', () => {
      thermostat.temperature = 17;
      expect(thermostat.energyUsage()).toEqual('low-usage')
    })
    it('checks enery usage high', () => {
      thermostat.temperature = 26;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    })
  })

})
