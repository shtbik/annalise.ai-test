import { FC } from 'react'

import { StyledComponent } from '../../types/component'

import { StyledImg } from './styled.index'

interface IImageCard extends StyledComponent {
  url: string
  alt: string
}

const ImageCard: FC<IImageCard> = ({ url, alt, className }) => {
  return (
    <div className={className}>
      <StyledImg src={url} alt={alt} />
    </div>
  )
}

export default ImageCard
