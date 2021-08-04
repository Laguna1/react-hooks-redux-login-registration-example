import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Signin from './Signin';
import Signup from './Signup';
import HomePage from './HomePage';


const App = () => {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;

