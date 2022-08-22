import current from 'src/services/mock.ottawa.json'
import fiveDays from 'src/services/mock.ottawa.5days.json'

// export type Weather = typeof current.weather[0]
export type Cities = {
  selected: string
  list: {
    name: City
  }[]
}

export type CurrentWeatherType = typeof current

export type ForecastType = typeof fiveDays

export type EachDay = typeof fiveDays.list[0] & {
  day?: string
}

export enum City {
  Ottawa = 'ottawa',
  Moscow = 'moscow',
  Tokyo = 'tokyo',
}

export enum DayCount {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
}

export enum Hour {
  Morning = '09:00:00',
  Noon = '12:00:00',
  Afternoon = '15:00:00',
  Evening = '18:00:00',
}

export enum Weather {
  Clear = 'Clear',
  Clouds = 'Clouds',
  Rain = 'Rain',
  Snow = 'Snow',
}

export enum Error {
  Current,
  Forecast,
}
