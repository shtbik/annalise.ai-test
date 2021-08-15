import { FC, FormEvent } from 'react'

import Button from '../../../atoms/Button'
import { StyledComponent } from '../../../types/component'

import { StyledInput, StyledResetButton } from './styled.index'

export interface ISearchForm extends StyledComponent {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onReset: (event: FormEvent<HTMLFormElement>) => void
  name: string
  disabled?: boolean
}

const SearchForm: FC<ISearchForm> = ({ name, onSubmit, onReset, disabled = false, className = '' }) => {
  return (
    <form onSubmit={onSubmit} onReset={onReset} className={className}>
      <StyledInput name={name} required placeholder="Type your query..." />

      <Button aria-disabled={disabled} type="submit">
        Search
      </Button>
      <StyledResetButton aria-disabled={disabled} type="reset">
        Random!
      </StyledResetButton>
    </form>
  )
}

export default SearchForm
