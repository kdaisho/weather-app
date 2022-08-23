import { fireEvent, render, screen } from '@testing-library/react'
import Header from 'src/components/Header'
import { City } from 'src/types'

const cities = {
  selected: City.Tokyo,
  list: [{ name: City.Ottawa }, { name: City.Moscow }, { name: City.Tokyo }],
}

const handleChangeCity = jest.fn()

it('should render list of cities', async () => {
  render(<Header cities={cities} handleChangeCity={handleChangeCity} />)

  const ottawa = await screen.findByRole('button', { name: /ottawa/i })
  const moscow = screen.getByRole('button', { name: /moscow/i })
  const tokyo = screen.getByRole('button', { name: /tokyo/i })

  expect(ottawa).toBeInTheDocument()
  expect(moscow).toBeInTheDocument()
  expect(tokyo).toBeInTheDocument()
})

it('should call handleChangeCity with moscow', async () => {
  render(<Header cities={cities} handleChangeCity={handleChangeCity} />)

  fireEvent.click(screen.getByRole('button', { name: /moscow/i }))

  expect(handleChangeCity).toBeCalledWith('moscow')
})
