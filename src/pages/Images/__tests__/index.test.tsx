import { render } from '@testing-library/react'

import ImagesPage from '../'

describe('Images page', () => {
  it('render without crashing', () => {
    const { container } = render(<ImagesPage />)

    expect(container.firstChild).toBeDefined()
  })
})
