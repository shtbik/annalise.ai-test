import { FC } from 'react'

import { StyledComponent } from '../../types/component'

import { StyleGrid } from './styled.index'

export interface IMansoryGrid extends StyledComponent {
  columnCount: number
  columnGap?: number
}

export const defaultColumnGap = 10

const MansoryGrid: FC<IMansoryGrid> = ({ children, columnCount, columnGap = defaultColumnGap, className }) => {
  return (
    <StyleGrid $columnCount={columnCount} $columnGap={columnGap} className={className}>
      {children}
    </StyleGrid>
  )
}

export default MansoryGrid
