import { render, screen } from '@testing-library/react'
import Forecast from 'src/components/Forecast'
import fiveDaysData from 'src/mock/ottawa.5days.json'
import { City } from 'src/types'

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(fiveDaysData),
    })
  ) as jest.Mock
})

it('should render four days forecast', async () => {
  render(<Forecast city={City.Ottawa} />)
  const twentyFives = await screen.findAllByText('25°')
  const eighteen = screen.getByText('18°')
  const seventeen = screen.getByText('17°')

  expect(twentyFives[0]).toBeInTheDocument()
  expect(twentyFives[1]).toBeInTheDocument()
  expect(eighteen).toBeInTheDocument()
  expect(seventeen).toBeInTheDocument()
})

it('should render error message', async () => {
  global.fetch = jest.fn(() => Promise.reject(new Error('Boom!')))
  render(<Forecast city={City.Ottawa} />)
  const error = await screen.findByText('Boom! forecast')

  expect(error).toBeInTheDocument()
})
