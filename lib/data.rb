require 'pg'

class Data

  def self.save_data(temperature, city, powermode)
    connection = PG.connect(dbname: 'thermostat')
    connection.exec("TRUNCATE data")
    result = connection.exec("INSERT INTO data (temperature, city, powermode) VALUES( #{temperature}, '#{city}', '#{powermode}')")
  end

  def self.fetch_data
    connection = PG.connect(dbname: 'thermostat')
    result = connection.exec('SELECT * FROM data')
    result.map do | item |
      @temp = item['temperature']
      @city = item["city"]
      @powermode = item['powermode']
    end
    [@temp, @city, @powermode]
  end

end
