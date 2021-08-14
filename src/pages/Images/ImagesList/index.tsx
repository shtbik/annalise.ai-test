import { FC } from 'react'

import { StyledComponent } from '../../../types/component'
import { TImageResponseGenerated } from '../types.generated'

import { StyledMansoryGrid, StyledImageCard, columnGap } from './styled.index'

interface IImagesList extends StyledComponent {
  loading: boolean
  data: TImageResponseGenerated
  error: boolean
}

const columnCount = 4

export const loadingMsg = 'Loading...'
export const errorMsg = 'Error'
export const emptyMsg = 'There is no data'

const ImagesList: FC<IImagesList> = ({ data, loading, error, className = '' }) => {
  if (loading) return <div>{loadingMsg}</div>
  if (error) return <div>{errorMsg}</div>
  if (!data.length) return <div>{emptyMsg}</div>

  return (
    <StyledMansoryGrid columnCount={columnCount} columnGap={columnGap} className={className}>
      {data.map(({ id, alt_description, urls: { small } }) => (
        <StyledImageCard key={id} url={small} alt={alt_description} />
      ))}
    </StyledMansoryGrid>
  )
}

export default ImagesList
