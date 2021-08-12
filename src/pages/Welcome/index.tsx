import { FC, useCallback, FormEvent, useContext } from 'react'
import { useHistory } from 'react-router-dom'

import { DispatchNameContext } from '../../store/name-context'
import Input from '../../atoms/Input'

import { StyledButton } from './styled.index'

export const fieldName = 'name'

const Welcome: FC = () => {
  const { push } = useHistory()
  const dispatchName = useContext(DispatchNameContext)

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const value = formData.get(fieldName) as string
    dispatchName(value)
    push('/images')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <Input name={fieldName} required placeholder={`Type your ${fieldName}...`} />
        </label>

        <StyledButton>Let's go</StyledButton>
      </form>
    </div>
  )
}

export default Welcome
