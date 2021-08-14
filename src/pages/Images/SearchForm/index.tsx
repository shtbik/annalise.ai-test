import { FC, FormEvent } from 'react'

import Button from '../../../atoms/Button'
import { StyledComponent } from '../../../types/component'

import { StyledInput, StyledResetButton } from './styled.index'

export interface ISearchForm extends StyledComponent {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  onReset: (event: FormEvent<HTMLFormElement>) => void
  name: string
}

const SearchForm: FC<ISearchForm> = ({ name, onSubmit, onReset, className = '' }) => {
  return (
    <form onSubmit={onSubmit} onReset={onReset} className={className}>
      <StyledInput name={name} required placeholder="Type your query..." />

      <Button type="submit">Search</Button>
      <StyledResetButton type="reset">Random!</StyledResetButton>
    </form>
  )
}

export default SearchForm
