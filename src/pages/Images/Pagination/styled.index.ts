import styled from 'styled-components'

import Button from '../../../atoms/Button'

export const StyledWrapper = styled.div`
  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[aria-disabled='true']:active {
    pointer-events: none;
  }
`

export const StyledNextButton = styled(Button)`
  margin-left: 10px;
`
