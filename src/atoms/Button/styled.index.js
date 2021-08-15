import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 5px;

  &[aria-disabled='true'] {
    cursor: not-allowed;
  }

  &[aria-disabled='true']:active {
    pointer-events: none;
  }
`
