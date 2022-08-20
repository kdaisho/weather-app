import { useEffect, useState } from 'react'
import weatherService from 'src/services/api'
import { CurrentWeatherType } from 'src/types'
import './CurrentWeather.css'

const CurrentWeather = (): JSX.Element => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    weatherService
      .getCurrentWeatherByCityName('ottawa')
      .then(data => setCurrentWeather(data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    console.log('loading or no currentWeather', { loading, currentWeather })
    return <div>Loading...</div>
  }

  if (!loading && !currentWeather) {
    return <div>Something wrong</div>
  }

  return (
    <div className='current-weather'>
      <div>
        <p>{currentWeather.weather[0].main}</p>
        <p>{currentWeather.main.temp}</p>
      </div>
    </div>
  )
}

export default CurrentWeather
