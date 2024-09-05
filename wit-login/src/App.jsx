import { Switch, Route } from 'react-router-dom';

import './App.css'
import Success from './components/Success';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';

function App() {

  return (
    <>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/main">
            <Success />
          </Route>
          <Route exact path="/error">
            <ErrorPage />
          </Route>
        </Switch>
    </>
  )
}

export default App
