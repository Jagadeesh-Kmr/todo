import {Switch, Route, Redirect} from 'react-router-dom'

import TaskManagement from './components/TaskManagement'
import NotFound from './components/NotFound'

import './App.css'

// Replace your code here

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={TaskManagement} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </>
)

export default App
