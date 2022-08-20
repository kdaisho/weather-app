import { City } from 'src/types'
import cn from 'classnames'
import './header.css'

const Header = (): JSX.Element => {
  const buttons = [
    { name: City.Ottawa, active: true },
    { name: City.Moscow, active: false },
    { name: City.Tokyo, active: false },
  ]
  return (
    <div className='header'>
      {buttons.map(item => {
        return (
          <button key={item.name} className={cn({ 'is-active': item.active })}>
            {item.name}
          </button>
        )
      })}
    </div>
  )
}

export default Header
