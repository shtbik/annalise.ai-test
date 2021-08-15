import { fireEvent, render } from '@testing-library/react'

import Pagination from '../Pagination'

describe('Images page - Pagination', () => {
  it('loading state', () => {
    const { container } = render(<Pagination disabled />)
    const buttons = container.getElementsByTagName('button')
    expect(buttons[0]).toHaveAttribute('aria-disabled', 'true')
  })

  it('disabled state', () => {
    const { container } = render(<Pagination />)
    const [prevBtn, nextBtn] = container.getElementsByTagName('button')

    expect(prevBtn.disabled).toBeTruthy()
    expect(nextBtn.disabled).toBeTruthy()
  })

  it('pass previous click only', () => {
    const handlePrev = jest.fn()
    const { container } = render(<Pagination onPrev={handlePrev} />)
    const [prevBtn, nextBtn] = container.getElementsByTagName('button')

    expect(prevBtn.disabled).toBeFalsy()
    expect(nextBtn.disabled).toBeTruthy()
    fireEvent.click(prevBtn)
    expect(handlePrev).toBeCalled()
  })

  it('pass next click only', () => {
    const handleNext = jest.fn()
    const { container } = render(<Pagination onNext={handleNext} />)
    const [prevBtn, nextBtn] = container.getElementsByTagName('button')

    expect(prevBtn.disabled).toBeTruthy()
    expect(nextBtn.disabled).toBeFalsy()
    fireEvent.click(nextBtn)
    expect(handleNext).toBeCalled()
  })
})
