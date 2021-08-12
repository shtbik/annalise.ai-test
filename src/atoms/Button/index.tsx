import { FC, ButtonHTMLAttributes } from 'react'
import { StyledComponent } from '../../types/component'

import { StyledButton } from './styled.index'

interface IButton extends StyledComponent {}

const Button: FC<IButton & ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button
