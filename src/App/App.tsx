import { useEffect } from 'react'
import Header from 'src/components/Header'
import CurrentWeather from 'src/components/CurrentWeather'
import Forecast from 'src/components/Forecast'
import './App.css'

import sample from './sample.png'

const App = (): JSX.Element => {
  useEffect(() => {}, [])

  return (
    <div className='weather-app'>
      <Header />
      <div className='container'>
        <div className='blue-background'>
          <CurrentWeather />
          <Forecast />
        </div>
      </div>
      {/* <img src={sample} className='sample' alt='Sample' /> */}
    </div>
  )
}

export default App
