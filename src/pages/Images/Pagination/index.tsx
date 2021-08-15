import { FC } from 'react'

import Button from '../../../atoms/Button'

import { StyledNextButton } from './styled.index'

interface IPagination {
  onPrev?: () => void
  onNext?: () => void
  disabled?: boolean
}

export const Pagination: FC<IPagination> = ({ onPrev, onNext, disabled = false }) => {
  return (
    <div>
      <Button onClick={onPrev} disabled={!onPrev} aria-disabled={disabled}>
        Prev Page
      </Button>
      <StyledNextButton onClick={onNext} disabled={!onNext} aria-disabled={disabled}>
        Next Page
      </StyledNextButton>
    </div>
  )
}

export default Pagination
