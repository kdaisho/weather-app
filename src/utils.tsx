import { EachDay, Hour, Weather } from 'src/types'
import {
  BsFillCloudRainFill,
  BsFillCloudsFill,
  BsFillCloudSnowFill,
  BsFillSunFill,
} from 'react-icons/bs'

export const renderWeatherIcon = (weather: Weather, className: string) => {
  switch (weather) {
    case Weather.Clear:
      return <BsFillSunFill className={className} />
    case Weather.Clouds:
      return <BsFillCloudsFill className={className} />
    case Weather.Rain:
      return <BsFillCloudRainFill className={className} />
    case Weather.Snow:
      return <BsFillCloudSnowFill className={className} />
    default:
      return <BsFillCloudsFill className={className} />
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

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const extractByHour = (item: EachDay) => {
  if (item.dt_txt.includes(Hour.Afternoon)) {
    const date = new Date(item.dt_txt.replace(/-/g, '/'))
    item.day = dayOfWeek[date.getDay()]
    return true
  }
  return false
}
