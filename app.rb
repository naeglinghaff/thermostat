require 'sinatra/base'
require 'json'

class Thermostat < Sinatra::Base
  enable :sessions

  get '/thermostat' do
    erb :index
    
  end

  post '/thermostat' do

  end

  run! if app_file == $0
end
