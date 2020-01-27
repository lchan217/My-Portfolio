import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import OtherInterests from "./components/OtherInterests";
import BlogContainer from "./components/blogs/BlogContainer";
import Contact from "./components/Contact";

// <Route exact path='/interests'  component={OtherInterests} />

function App() {
  return (
    <Router>
      <div class='background'>
        <NavBar />
        <div id='wrapper'>
          <Route exact path='/' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/experience' component={Experience} />
          <Route exact path='/blog' component={BlogContainer} />
          <Route exact path='/contact' component={Contact} />
        </div>
      </div>
    </Router>
  );
}

export default App;
