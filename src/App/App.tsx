import { useEffect } from 'react'
import Header from 'src/components/Header'
import CurrentWeather from 'src/components/CurrentWeather'
import Forecast from 'src/components/Forecast'
import './App.css'

const App = (): JSX.Element => {
  useEffect(() => {}, [])

  return (
    <div className='weather-app'>
      <Header />
      <CurrentWeather />
      <Forecast />
    </div>
  )
}

export default App
