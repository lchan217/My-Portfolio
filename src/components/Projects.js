import React from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="animals">
        <b>Animals Game: </b>
          <a href='https://animals-game.herokuapp.com/' target="_blank">Play My Game </a>|
          <a href='https://www.youtube.com/watch?v=u_D9pj6gzo8'  target="_blank"> Demo </a> |
          <a href='https://github.com/lchan217/Project-5-Animals-Game' target="_blank"> Code </a><br></br>
        App where users save endangered animals, nurse them back to health, and release into the wild <br></br>
      <i>Foundation: React, Redux, Rails API</i>
      </div>

      <br></br>

      <div className="restaurants">
        <b>My Restaurants: </b>
          <a href='https://restaurants1000.herokuapp.com/' target="_blank"> Log Some Restaurants </a>|
          <a href='https://www.youtube.com/watch?v=4wTQYPsNjJ8' target="_blank"> Demo </a> |
          <a href='https://github.com/lchan217/Project-3-Restaurants-Flatiron-Final' target="_blank"> Code </a><br></br>
          App that allows users to enter information about restaurants and their menu items<br></br>
        <i>Foundation: Rails, JavaScript, jQuery</i>
      </div>

      <br></br>


      <div className="destinations">
        <b>Destination Tracker: </b>
          <a href='https://destinations1000.herokuapp.com/' target="_blank"> Track Those Destinations </a>|
          <a href='https://www.youtube.com/watch?v=A1OR5Khzv38' target="_blank"> Demo </a> |
          <a href='https://github.com/lchan217/Project-2-Travel' target="_blank"> Code </a><br></br>
          App designed to log destinations user has visited and would like to visit <br></br>
        <i>Foundation: Sinatra, CSS, Bootstrap</i>
      </div>

      <br></br>

      <div className="hogIron">
        <b>Hog-Iron Collaboration Project: </b>
          <a href='https://hog-iron.herokuapp.com/' target="_blank"> Enroll Today </a>|
          <a href='' target="_blank"> Demo - need to do </a> |
          <a href='https://github.com/lchan217/Hog-Iron' target="_blank"> Code </a><br></br>
          App where user can sign up for classes at Hog Warts <br></br>
        <b>My Contribution:</b> Setting up models and controllers, assisted with views <br></br>
        <i>Foundation: Rails, Bootstrap  </i>
      </div>

      <br></br>
      <div className="goodreads">
        <b>Goodreads:  </b>
          <a href='https://www.youtube.com/watch?v=xOYFTuSu-vs' target="_blank"> Demo </a> |
          <a href='https://github.com/lchan217/Project-1-Goodreads' target="_blank"> Code </a><br></br>
          App allows users to see the 2018 Goodreads Choice Awards winners along with author, title, rating, and description <br></br>
        <i>Foundation: Ruby, Nokogiri  </i>
      </div>

    </div>
  );
};

export default Projects;
