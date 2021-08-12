import { FC, InputHTMLAttributes } from 'react'
import { StyledComponent } from '../../types/component'

import { StyledInput } from './styled.index'

interface IInput extends StyledComponent {}

const Input: FC<IInput & InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <StyledInput {...props} />
}

export default Input
