import styled from 'styled-components'

interface IStyleGrid {
  $columnCount: number
  $columnGap: number
}

export const StyleGrid = styled.div<IStyleGrid>`
  column-count: ${({ $columnCount }) => $columnCount};
  column-gap: ${({ $columnGap }) => `${$columnGap}px`};

  > * {
    display: grid;
    grid-template-rows: 1fr auto;
    overflow: hidden;
    break-inside: avoid;
  }
`
