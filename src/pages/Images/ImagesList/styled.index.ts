import styled from 'styled-components'

import MansoryGrid, { IMansoryGrid } from '../../../molecules/MansoryGrid'

import ImageCard from '../../../molecules/ImageCard'

export const columnGap = 10

export const StyledMansoryGrid = styled(MansoryGrid)<IMansoryGrid>`
  column-count: 1;

  ${({ columnCount, theme: { responsive } }) => `
    ${responsive.up('sm')} {
      column-count: ${Math.floor(columnCount / 2)};
    }
    ${responsive.up('md')} {
      column-count: ${columnCount};
    }
  `};
`

export const StyledImageCard = styled(ImageCard)`
  display: flex;
  justify-content: center;
  margin-bottom: ${columnGap}px;
`
