import cn from 'classnames'
import { FunctionComponent } from 'react'
import { CityState, City } from 'src/types'
import st from './Header.module.css'

const Header: FunctionComponent<{
  cities: CityState
  handleChangeCity: (name: City) => void
}> = ({ cities, handleChangeCity }) => (
  <div className={st.header}>
    {cities.list.map(city => (
      <button
        key={city.name}
        className={cn({
          [st['is-active']]: cities.selected === city.name,
        })}
        onClick={() => handleChangeCity(city.name)}
        title={city.name}
      >
        {city.name}
      </button>
    ))}
  </div>
)

export default Header
