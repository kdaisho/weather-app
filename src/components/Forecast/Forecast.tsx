import { useEffect, useState } from 'react'
import { City, DayCount, ForecastType } from 'src/types'
import { extractByHour } from './utils'
import weatherService from 'src/services/api'
import './Forecast.css'

import { Weather } from 'src/types'
import {
  BsFillCloudRainFill,
  BsFillCloudsFill,
  BsFillCloudSnowFill,
  BsFillSunFill,
} from 'react-icons/bs'

const Forecast = (): JSX.Element => {
  const [forecast, setForecast] = useState<ForecastType>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    weatherService
      .getFiveDayThreeHourForecastByCityName(City.Ottawa)
      .then(data => {
        const fourDays = data.list.filter(extractByHour).slice(0, DayCount.Four)
        setForecast(fourDays)
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    console.log({ forecast })
  }, [forecast])

  if (loading) {
    console.log('loading or no forecast', { loading, forecast })
    return <div>Loading...</div>
  }

  if (!loading && !forecast) {
    return <div>Something wrong</div>
  }

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

  return (
    <div className='forecast'>
      {Array.isArray(forecast) &&
        forecast.map(item => {
          return (
            <div key={item.dt} className='each-day'>
              <p className='day-of-week'>{item.day}</p>
              {renderWeatherIcon(item.weather[0].main)}
              <p className='temperature'>{Math.floor(item.main.temp)}&#176;</p>
            </div>
          )
        })}
    </div>
  )
}

export default Forecast
