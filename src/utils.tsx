import { Weather } from 'src/types'
import {
  BsFillCloudRainFill,
  BsFillCloudsFill,
  BsFillCloudSnowFill,
  BsFillSunFill,
} from 'react-icons/bs'

export const renderWeatherIcon = (weather: Weather) => {
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

export const toastConfig = { bar: { size: '0' } }

export const locations = {
  ottawa: {
    lat: 45.4211435,
    lon: -75.6900574,
  },
  moscow: {
    lat: 55.7504461,
    lon: 37.6174943,
  },
  tokyo: {
    lat: 35.6828387,
    lon: 139.7594549,
  },
}
