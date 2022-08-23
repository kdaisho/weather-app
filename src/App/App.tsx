import { FunctionComponent, useState } from 'react'
import Header from 'src/components/Header'
import CurrentWeather from 'src/components/CurrentWeather'
import Forecast from 'src/components/Forecast'
import { City } from 'src/types'
import st from './App.module.css'

const App: FunctionComponent = () => {
  const defaultCityState = {
    selected: City.Ottawa,
    list: [{ name: City.Ottawa }, { name: City.Moscow }, { name: City.Tokyo }],
  }
  const [cities, setCities] = useState(defaultCityState)

  const handleChangeCity = (name: City) => {
    setCities(cities => ({ ...cities, selected: name }))
  }

  return (
    <div className={st['weather-app']}>
      <Header cities={cities} handleChangeCity={handleChangeCity} />
      <div className={st.container}>
        <div className={st['blue-background']}>
          <CurrentWeather city={cities.selected} />
          <Forecast city={cities.selected} />
        </div>
      </div>
    </div>
  )
}

export default App
