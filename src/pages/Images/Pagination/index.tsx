import { FC } from 'react'

import Button from '../../../atoms/Button'

import { StyledWrapper, StyledNextButton } from './styled.index'

interface IPagination {
  onPrev?: () => void
  onNext?: () => void
  loading?: boolean
}

export const Pagination: FC<IPagination> = ({ onPrev, onNext, loading = false }) => {
  return (
    <StyledWrapper aria-disabled={loading}>
      <Button onClick={onPrev} disabled={!onPrev}>
        Prev Page
      </Button>
      <StyledNextButton onClick={onNext} disabled={!onNext}>
        Next Page
      </StyledNextButton>
    </StyledWrapper>
  )
}

export default Pagination
