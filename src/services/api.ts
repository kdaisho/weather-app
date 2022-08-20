class Weather {
  async getCurrentWeatherByCityName(city) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      return response.json()
    } catch (err) {
      console.error(err)
    }
  }

  async getFiveDayThreeHourForecastByCityName(city) {
    const locations = {
      ottawa: {
        lat: 45.4211435,
        lon: -75.6900574,
      },
      moscow: {
        lat: 55.7504461,
        lon: 37.6174943,
      },
      tokyo: {
        lat: 35.6828387,
        lon: 139.7594549,
      },
    }
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${locations[city].lat}&lon=${locations[city].lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
      return response.json()
    } catch (err) {
      console.error(err)
    }
  }
}
//https://api.openweathermap.org/data/2.5/weather?q=ottawa&appid={API_KEY}&units=metric
export default new Weather()
