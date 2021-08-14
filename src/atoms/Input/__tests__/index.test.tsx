import { render } from '@testing-library/react'
import styled from 'styled-components'

import Input from '../'

const SInput = styled(Input)`
  display: none;
`

describe('Input component', () => {
  it('pass classname', () => {
    const { container } = render(<SInput name="test" />)
    expect(container.firstChild).toHaveClass(SInput['styledComponentId'])
    expect(container.firstChild).toHaveStyleRule('display', 'none')
  })

  it('snapshot', () => {
    const { container } = render(<Input name="surname" placeholder="type your surname" defaultValue="Pupkin" />)
    expect(container).toMatchSnapshot()
  })
})
