import styled from 'styled-components'

export const StyledWrapper = styled.div`
  padding: 20px;

  ${({ theme: { responsive } }) => `${responsive.up('md')} {
    padding: 40px;
  }`}
`
