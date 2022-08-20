import { EachDay, Hour } from 'src/types'

const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const extractByHour = (item: EachDay) => {
  const date = new Date(item.dt_txt)
  item.day = dayOfWeek[date.getDay()]

  return item.dt_txt.includes(Hour.Afternoon)
}
