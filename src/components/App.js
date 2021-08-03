import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Signin from './Signin';
import Signup from './Signup';


const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  )
}

export default App;

