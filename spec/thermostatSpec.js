describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  })

  describe('temperature', function(){
    it('starts at 20', function(){
      expect(thermostat.temperature).toEqual(20);
    })
    it('can change the temperature', function(){
      expect(thermostat.turnUp()).toEqual(21);
    })
  })

})
