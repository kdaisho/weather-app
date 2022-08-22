import { FunctionComponent, useEffect, useState } from 'react'
import toast from 'cogo-toast'
import cn from 'classnames'
import { City, DayCount, ForecastType } from 'src/types'
import { extractByHour } from './utils'
import weatherService from 'src/services/api'
import { renderWeatherIcon, toastConfig } from 'src/utils'
import './Forecast.css'

const Forecast: FunctionComponent<{ city: City }> = ({ city }) => {
  const [forecast, setForecast] = useState<ForecastType>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    weatherService
      .getFiveDayThreeHourForecastByCityName(city)
      .then(data => {
        const fourDays = data.list.filter(extractByHour).slice(0, DayCount.Four)
        setForecast(fourDays)
      })
      .catch(err => toast.error(`${err.message} forecast`, toastConfig))
      .finally(() => setLoading(false))
  }, [city])

  return (
    <div className='forecast'>
      {Array.isArray(forecast) &&
        forecast.map(item => {
          return (
            <div key={item.dt} className={cn('each-day', { blur: loading })}>
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
