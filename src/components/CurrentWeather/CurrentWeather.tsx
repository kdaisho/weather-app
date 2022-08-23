import { FunctionComponent, useEffect, useState } from 'react'
import cn from 'classnames'
import toast from 'cogo-toast'
import weatherService from 'src/services/api'
import { City, CurrentWeatherType, Weather } from 'src/types'
import { renderWeatherIcon, toastConfig } from 'src/utils'
import st from './CurrentWeather.module.css'

const CurrentWeather: FunctionComponent<{ city: City }> = ({ city }) => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    weatherService
      .getCurrentWeatherByCityName(city)
      .then(data => setCurrentWeather(data))
      .catch(err => {
        toast.error(`${err.message} current weather`, toastConfig)
      })
      .finally(() => setLoading(false))
  }, [city])

  return (
    <div className={st.current}>
      <h1>Today</h1>
      <div className={cn(st.info, { [st.blur]: loading })}>
        {renderWeatherIcon(
          currentWeather?.weather[0].main as Weather,
          st['icon']
        )}
        <div className={st.weather}>
          <p className={`${st.temperature} is-number`}>
            {Math.floor(currentWeather?.main.temp as number) || '?'}
            &#176;
          </p>
          <p className={st.name}>{currentWeather?.weather[0].main}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
