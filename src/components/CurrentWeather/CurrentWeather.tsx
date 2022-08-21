import { useEffect, useState } from 'react'
import weatherService from 'src/services/api'
import { CurrentWeatherType, Weather } from 'src/types'
import {
  BsFillCloudRainFill,
  BsFillCloudsFill,
  BsFillCloudSnowFill,
  BsFillSunFill,
} from 'react-icons/bs'

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

  const renderWeatherIcon = (weather: string) => {
    switch (weather) {
      case Weather.Clear:
        return <BsFillSunFill className='icon' />
      case Weather.Clouds:
        return <BsFillCloudsFill className='icon' />
      case Weather.Rain:
        return <BsFillCloudRainFill className='icon' />
      case Weather.Snow:
        return <BsFillCloudSnowFill className='icon' />
      default:
        return <BsFillCloudsFill className='icon' />
    }
  }

  if (loading) {
    console.log('loading or no currentWeather', { loading, currentWeather })
    return <div>Loading...</div>
  }

  if (!loading && !currentWeather) {
    return <div>Something wrong</div>
  }

  return (
    <div className='current-weather'>
      <h1>Today</h1>
      <div className='info'>
        {renderWeatherIcon(currentWeather.weather[0].main)}
        <div className='temperature-weather'>
          <p className='temperature'>
            {Math.floor(currentWeather.main.temp)}&#176;
          </p>
          <p className='weather'>{currentWeather.weather[0].main}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
