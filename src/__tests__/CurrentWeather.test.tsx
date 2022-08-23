import { render, screen } from '@testing-library/react'
import CurrentWeather from 'src/components/CurrentWeather'
import currentWeatherData from 'src/mock/ottawa.json'
import { City } from 'src/types'

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(currentWeatherData),
    })
  ) as jest.Mock
})

it('should render the current weather', async () => {
  render(<CurrentWeather city={City.Ottawa} />)
  const clouds = await screen.findByText('Clouds')

  expect(clouds).toBeInTheDocument()
})

it('should render error message', async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error('Boom!'))) as jest.Mock
  render(<CurrentWeather city={City.Ottawa} />)
  const error = await screen.findByText('Boom! current weather')

  expect(error).toBeInTheDocument()
})
