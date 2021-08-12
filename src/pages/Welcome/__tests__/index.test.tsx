import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/test-utils'
import { DispatchNameContext } from '../../../store/name-context'

import WelcomePage, { fieldName } from '../'

const testValue = 'Alex'

describe('Images Search - Welcome page', () => {
  it('set context on submitting', () => {
    const setContextValue = jest.fn()

    const { container } = render(
      <DispatchNameContext.Provider value={setContextValue}>
        <WelcomePage />
      </DispatchNameContext.Provider>
    )
    const formElem = container.getElementsByTagName('form')[0]
    const formData = new FormData()
    formData.append(fieldName, testValue)
    fireEvent.submit(formElem, { currentTarget: formData })

    expect(setContextValue).toHaveBeenCalled()
  })
})
