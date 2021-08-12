import { render } from '@testing-library/react'
import styled from 'styled-components'

import ImageCard from '../'

const SImageCard = styled(ImageCard)`
  filter: blur(5px);
`

const imageUrl =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/440px-Image_created_with_a_mobile_phone.png'

describe('ImageCard component', () => {
  it('url passed correctly', () => {
    const { container } = render(<ImageCard url={imageUrl} alt="Avatar" />)
    expect(container.getElementsByTagName('img')[0].src).toEqual(imageUrl)
  })

  it('snapshot', () => {
    const { container } = render(<SImageCard url={imageUrl} alt="Logo" />)
    expect(container).toMatchSnapshot()
  })
})
