import { useEffect, useState } from 'react'
import { City, DayCount, ForecastType } from 'src/types'
import { extractByHour } from './utils'
import weatherService from 'src/services/api'
import './Forecast.css'

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

  return (
    <div className='forecast'>
      {Array.isArray(forecast) &&
        forecast.map(item => {
          return (
            <div key={item.dt}>
              <p>{item.day}</p>
              <p>{item.weather[0].main}</p>
              <p>{item.main.temp}</p>
              <hr />
            </div>
          )
        })}
    </div>
  )
}

export default Forecast
