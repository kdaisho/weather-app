// import { City } from 'src/types'
import cn from 'classnames'
import { FunctionComponent } from 'react'
import { Cities, City } from 'src/types'
import './header.css'

const Header: FunctionComponent<{
  cities: Cities
  handleChangeCity: (name: City) => void
}> = ({ cities, handleChangeCity }) => {
  return (
    <div className='header'>
      {cities.list.map(city => {
        return (
          <button
            key={city.name}
            className={cn({ 'is-active': cities.selected === city.name })}
            onClick={() => handleChangeCity(city.name)}
            title={city.name}
          >
            {city.name}
          </button>
        )
      })}
    </div>
  )
}

export default Header
