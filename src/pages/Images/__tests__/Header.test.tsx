import { render } from '../../../utils/test-utils'
import { NameContext } from '../../../store/name-context'

import Header from '../Header'

const testValue = 'Mark'

describe('Images page - Header', () => {
  it('use context value', () => {
    const { container } = render(
      <NameContext.Provider value={testValue}>
        <Header />
      </NameContext.Provider>
    )

    expect(container).toHaveTextContent(testValue)
  })
})
