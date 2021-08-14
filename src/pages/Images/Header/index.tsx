import { useContext } from 'react'

import { NameContext } from '../../../store/name-context'

const Header = () => {
  const name = useContext(NameContext)

  return <h3>Hello, {name}</h3>
}

export default Header
