import current from 'src/mock/ottawa.json'
import fiveDays from 'src/mock/ottawa.5days.json'

// export type Weather = typeof current.weather[0]
export type CityState = {
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
  Two,
  Three,
  Four,
  Five,
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
