import { useState } from 'react'
import Header from 'src/components/Header'
import CurrentWeather from 'src/components/CurrentWeather'
import Forecast from 'src/components/Forecast'
import { City } from 'src/types'
import './App.css'

const App = (): JSX.Element => {
  const defaultLocationState = {
    selected: City.Ottawa,
    list: [{ name: City.Ottawa }, { name: City.Moscow }, { name: City.Tokyo }],
  }
  const [cities, setCities] = useState(defaultLocationState)

  const handleChangeCity = (name: City) => {
    setCities(cities => ({ ...cities, selected: name }))
  }

  return (
    <div className='weather-app'>
      <Header cities={cities} handleChangeCity={handleChangeCity} />
      <div className='container'>
        <div className='blue-background'>
          <CurrentWeather city={cities.selected} />
          <Forecast city={cities.selected} />
        </div>
      </div>
    </div>
  )
}

export default App
