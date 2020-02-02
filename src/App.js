import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";

import About from "./components/About";
import Projects from "./components/projects/Projects";
import MiniProjects from "./components/miniProjects/MiniProjects";
import Experience from "./components/experience/Experience";
import BlogContainer from "./components/blogs/BlogContainer";
import Contact from "./components/contact/Contact";

//not used
// import OtherInterests from "./components/OtherInterests";
// <Route exact path='/interests'  component={OtherInterests} />

function App() {
  return (
    <Router>
      <div className='background'>
        <NavBar />
        <div id='wrapper'>
          <Route exact path='/' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/mini-projects' component={MiniProjects} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/blog' component={BlogContainer} />
          <Route exact path='/contact' component={Contact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
