import { render, fireEvent } from '@testing-library/react'
import styled from 'styled-components'

import Button from '../'

const SButton = styled(Button)`
  display: inline-block;
`

describe('Button component', () => {
  it('pass classname', () => {
    const { container } = render(<SButton>Click</SButton>)
    expect(container.firstChild).toHaveClass(SButton.styledComponentId)
    expect(container.firstChild).toHaveStyleRule('display', 'inline-block')
  })

  it('onClick', () => {
    const handleSubmit = jest.fn()
    const { container } = render(<Button onClick={handleSubmit}>Click</Button>)
    fireEvent.click(container.firstChild as ChildNode)
    fireEvent.click(container.firstChild as ChildNode)
    expect(handleSubmit).toBeCalledTimes(2)
  })

  it('snapshot', () => {
    const { container } = render(
      <Button type="submit" name="submit" disabled>
        Submit
      </Button>
    )
    expect(container).toMatchSnapshot()
  })
})
