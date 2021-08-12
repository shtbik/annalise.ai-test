import styled from 'styled-components'

import { render } from '../../../utils/test-utils'

import ImagesList, { loadingMsg, errorMsg, emptyMsg } from '../ImagesList'

const SImagesList = styled(ImagesList)`
  margin-top: 10px;
`

const data = [
  { id: '1', alt_description: '', urls: { small: '' } },
  { id: '2', alt_description: '', urls: { small: '' } },
]

describe('Images page - Images List', () => {
  it('loading state', () => {
    const { container } = render(<SImagesList loading={true} error={false} data={[]} />)
    expect(container).toHaveTextContent(loadingMsg)
  })

  it('error state', () => {
    const { container } = render(<SImagesList loading={false} error={true} data={[]} />)
    expect(container).toHaveTextContent(errorMsg)
  })

  it('no content state', () => {
    const { container } = render(<SImagesList loading={false} error={false} data={[]} />)
    expect(container).toHaveTextContent(emptyMsg)
  })

  it('pass classname to grid', () => {
    const { container } = render(<SImagesList loading={false} error={false} data={data} />)
    expect(container.firstChild).toHaveClass(SImagesList.styledComponentId)
    expect(container.firstChild).toHaveStyleRule('margin-top', '10px')
  })
})
