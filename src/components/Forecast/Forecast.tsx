import { FunctionComponent, useEffect, useState } from 'react'
import cn from 'classnames'
import toast from 'cogo-toast'
import weatherService from 'src/services/api'
import { City, DayCount, ForecastType } from 'src/types'
import { extractByHour, renderWeatherIcon, toastConfig } from 'src/utils'
import st from './Forecast.module.css'

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
    <div className={st.forecast}>
      {Array.isArray(forecast) &&
        forecast.map(item => {
          return (
            <div
              key={item.dt}
              className={cn(st['each-day'], { [st.blur]: loading })}
            >
              <p className={st['day-of-week']}>{item.day}</p>
              {renderWeatherIcon(item.weather[0].main, st.icon)}
              <p className={`${st.temperature} is-number`}>
                {Math.floor(item.main.temp)}&#176;
              </p>
            </div>
          )
        })}
    </div>
  )
}

export default Forecast
