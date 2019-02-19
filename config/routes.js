import React from 'React'
import { Switch, Route } from 'react-router-dom'
// checkout , main
import ShopScreen from '../src/ShopScreen'

const Navigation = () => {
  return (
      <Switch>
        <Route exact path='/' component={ShopScreen}/>
      </Switch>
  )
}
export default Navigation