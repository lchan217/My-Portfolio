import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="animals">
        <b>Animals Game: </b>
          <a href='https://animals-game.herokuapp.com/'> Play My Game </a>|
          <a href='https://www.youtube.com/watch?v=u_D9pj6gzo8'> Demo </a> |
          <a href='https://github.com/lchan217/Project-5-Animals-Game'> Code </a><br></br>
        App where users save endangered animals, nurse them back to health, and release into the wild <br></br>
      <i>Foundation: React, Redux, Rails API</i>
      </div>

      <br></br>

      <div className="restaurants">
        <b>My Restaurants: </b>
          <a href='https://restaurants1000.herokuapp.com/'> Log Some Restaurants </a>|
          <a href='https://www.youtube.com/watch?v=4wTQYPsNjJ8'> Demo </a> |
          <a href='https://github.com/lchan217/Project-3-Restaurants-Flatiron-Final'> Code </a><br></br>
          App that allows users to enter information about restaurants and their menu items<br></br>
        <i>Foundation: Rails, JavaScript, jQuery</i>
      </div>

      <br></br>


      <div className="destinations">
        <b>Destination Tracker: </b>
          <a href='https://destinations1000.herokuapp.com/'> Track Those Destinations </a>|
          <a href='https://www.youtube.com/watch?v=A1OR5Khzv38'> Demo </a> |
          <a href='https://github.com/lchan217/Project-2-Travel'> Code </a><br></br>
          App designed to log destinations user has visited and would like to visit <br></br>
        <i>Foundation: Sinatra, CSS, Bootstrap</i>
      </div>

      <br></br>

      <div className="hogIron">
        <b>Hog-Iron Collaboration Project: </b>
          <a href='https://hog-iron.herokuapp.com/'> Enroll Today </a>|
          <a href=''> Demo - need to do </a> |
          <a href='https://github.com/lchan217/Hog-Iron'> Code </a><br></br>
          App where user can sign up for classes at Hog Warts <br></br>
        <b>My Contribution:</b> Setting up models and controllers, assisted with views <br></br>
        <i>Foundation: Rails, Bootstrap  </i>
      </div>

      <br></br>
      <div className="goodreads">
        <b>Goodreads:  </b>
          <a href='https://www.youtube.com/watch?v=xOYFTuSu-vs'> Demo </a> |
          <a href='https://github.com/lchan217/Project-1-Goodreads'> Code </a><br></br>
          App allows users to see the 2018 Goodreads Choice Awards winners along with author, title, rating, and description <br></br>
        <i>Foundation: Ruby, Nokogiri  </i>
      </div>

    </div>
  );
};

export default Projects;
