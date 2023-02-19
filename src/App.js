import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import AboutJson from './components/AboutJson'
import Home from './components/Home'
import Preview from './components/Preview'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutjson" component={AboutJson} />
          <Route exact path="/preview" component={Preview} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
)

export default App
