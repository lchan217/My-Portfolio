import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/'  component={Home} />
        <Route exact path='/about'  component={About} />
        <Route exact path='/projects'  component={Projects} />
        <Route exact path='/resume'  component={Resume} />
        <Route exact path='/contact'  component={Contact} />
      </div>
    </Router>
  )
}

export default App;
