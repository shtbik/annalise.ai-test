import { render } from '../../../utils/test-utils'

import ImagesSearchTemplate from '../'

describe('Images Search - Images Search Template', () => {
  it('render without crashing', () => {
    const { container } = render(<ImagesSearchTemplate />)
    expect(container.firstChild).toBeDefined()
  })
})
