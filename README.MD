## Themistocles - the digital thermostat

A small project put together in JavaScript, JQuery, Sinatra and using the Open Weather API.

Themistocles the thermostat mimics the functionality of real life thermostat and also fetches you the latest temperatures for the city that you are in.

To see Themistocles in all his glory:

```
clone git@github.com:naeglinghaff/thermostat.git
bundle
rackup
open the local host displayed in your terminal in your favourite browser
```

To run his tests:

```
clone git@github.com:naeglinghaff/thermostat.git
bundle
open SpecRunner.html in your local browser
```

### Functionality

Themistocles needed to be able to adjust the temperature, employ a power saving mode to limit the temperature increase and to feedback energy usage depending on whether it was low, medium or high.

He also needed to make calls to the open weather api and to our own privately build API rendered in Sinatra and Ruby to save his state.

### Methodology

To save the state of Themistocles he will make a call to our own Sinatra API.
This API stores the state of the thermostat in a post request and on load in our JQuery returns the values stored there with a get request.

Initially I wanted to simple send over the data as a JSON object, store it locally in sessions and then pass it back to the front end when the get request came in. However during implementation this slowed down the request and never quite returned the result I was looking for.

This method of making AJAX requests would be something I'd like to investigate further in the future.

In the meantime, I implemented a Sinatra and Ruby based local server which could accept and respond to the calls my JQuery was making to the API. This involved setting up a database and mapping the data to a model.

## Future Additions

To add to this project I would like to:

* Save the city as part of the state (communicated over the local API call)
* Save the power mode in state
* Finalise the CSS and JQuery for the font end
