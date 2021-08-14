import { render, fireEvent } from '@testing-library/react'
import styled from 'styled-components'

import SearchForm from '../SearchForm'

const fieldName = 'query'

const SSearchForm = styled(SearchForm)`
  padding: 10px;
`

describe('Images page - Search Form', () => {
  it('triggering dependencies', () => {
    const handleSubmit = jest.fn()
    const handleReset = jest.fn()

    const { container } = render(<SearchForm name={fieldName} onSubmit={handleSubmit} onReset={handleReset} />)
    const formElem = container.getElementsByTagName('form')[0]
    fireEvent.submit(formElem)
    fireEvent.reset(formElem)

    expect(handleSubmit).toBeCalled()
    expect(handleReset).toBeCalled()
  })

  it('pass classname', () => {
    const { container } = render(<SSearchForm name={fieldName} onSubmit={() => {}} onReset={() => {}} />)
    expect(container.firstChild).toHaveClass(SSearchForm.styledComponentId)
    expect(container.firstChild).toHaveStyleRule('padding', '10px')
  })
})
