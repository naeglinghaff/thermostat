require 'sinatra/base'
require 'json'
require './lib/data'
require 'dotenv'

Dotenv.load

class ThermostatApp < Sinatra::Base
  enable :sessions

  get '/' do
    @api = ENV['API']
    erb :index
  end

  get '/thermostat' do
    {temperature: Data.fetch_data[0], city: Data.fetch_data[1], powermode: Data.fetch_data[2]}.to_json
  end

  post '/thermostat' do
    temperature = params[:temperature]
    city = params[:city]
    powermode = params[:powermode]
    Data.save_data(temperature, city, powermode)
  end

  run! if app_file == $0
end
