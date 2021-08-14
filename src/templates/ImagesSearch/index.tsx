import { FC, useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import Main from '../../pages/Welcome'
import Images from '../../pages/Images'

import { TNameValue, DispatchNameContext, NameContext } from '../../store/name-context'

import { StyledWrapper } from './styled.index'

const ImagesSearch: FC = () => {
  const [name, setName] = useState<TNameValue>('')

  return (
    <DispatchNameContext.Provider value={setName}>
      <NameContext.Provider value={name}>
        <StyledWrapper>
          <Switch>
            <Route exact path="/" component={Main} />
            {name && <Route exact path="/images" component={Images} />}

            <Route path="*" component={Main} />
          </Switch>
        </StyledWrapper>
      </NameContext.Provider>
    </DispatchNameContext.Provider>
  )
}

export default ImagesSearch
