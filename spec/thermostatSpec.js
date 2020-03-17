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

})
