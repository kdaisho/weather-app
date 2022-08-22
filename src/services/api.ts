import { locations } from 'src/utils'
import { City } from 'src/types'

class Weather {
  async getCurrentWeatherByCityName(city: City) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      return response.json()
    } catch (err: any) {
      throw new Error(err.message || 'Something went wrong with')
    }
  }

  async getFiveDayThreeHourForecastByCityName(city: City) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${locations[city].lat}&lon=${locations[city].lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      return response.json()
    } catch (err: any) {
      throw new Error(err.message || 'Something went wrong with')
    }
  }
}

export default new Weather()
