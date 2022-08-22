import { useEffect, useState } from 'react'
import cn from 'classnames'
import toast from 'cogo-toast'
import weatherService from 'src/services/api'
import { City, CurrentWeatherType, Weather } from 'src/types'
import { renderWeatherIcon, toastConfig } from 'src/utils'
import './CurrentWeather.css'

const CurrentWeather = ({ city }: { city: City }): JSX.Element => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    weatherService
      .getCurrentWeatherByCityName(city)
      .then(data => {
        console.log({ data })
        setCurrentWeather(data)
      })
      .catch(err => {
        toast.error(`${err.message} current weather`, toastConfig)
      })
      .finally(() => setLoading(false))
  }, [city])

  return (
    <div className='current-weather'>
      <h1>Today</h1>
      <div className={cn('info', { blur: loading })}>
        {renderWeatherIcon(currentWeather?.weather[0].main as Weather)}
        <div className='temperature-weather'>
          <p className='temperature'>
            {Math.floor(currentWeather?.main.temp as number) || '?'}
            &#176;
          </p>
          <p className='weather'>{currentWeather?.weather[0].main}</p>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather
