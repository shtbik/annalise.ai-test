import styled from 'styled-components'

import { render } from '../../../utils/test-utils'

import MansoryGrid, { defaultColumnGap } from '../'

const SMansoryGrid = styled(MansoryGrid)`
  margin: 10px;
`

const columnCount = 4
const childrens = (
  <>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </>
)

describe('MansoryGrid component', () => {
  it('default props', () => {
    const { container } = render(<MansoryGrid columnCount={columnCount}>{childrens}</MansoryGrid>)

    expect(container.firstChild).toHaveStyleRule(`column-gap`, `${defaultColumnGap}px`)
    expect(container.firstChild).toHaveStyleRule(`column-count`, columnCount.toString())
  })

  it('snapshot', () => {
    const { container } = render(
      <SMansoryGrid columnCount={6} columnGap={15}>
        {childrens}
      </SMansoryGrid>
    )
    expect(container).toMatchSnapshot()
  })
})
