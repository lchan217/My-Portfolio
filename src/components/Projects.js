import React, { Component } from "react";
import { Card, Icon } from "semantic-ui-react";
import womenCodigo from "./womenCodigo.jpg";

class Projects extends Component {
  constructor(props) {
    super();
    this.state = {
      width: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    let isMobile;
    const width = this.state.width;
    width <= 1000 ? (isMobile = true) : (isMobile = false);

    let itemsPerRow;
    isMobile ? (itemsPerRow = 1) : (itemsPerRow = 2);
    let picHeight;
    isMobile ? (picHeight = 150) : (picHeight = 250);

    return (
      <div className='projects'>
        <h1 className='center'>My Projects</h1>
        <Card.Group itemsPerRow={itemsPerRow}>
          <div class='card'>
            <div class='image'>
              <img
                style={{ width: "100%", height: { picHeightg } }}
                src={womenCodigo}
              ></img>
            </div>
            <div class='content'>
              <div class='header'>
                <i style={{ color: "blue" }}>Currently Working On: </i>Codigo
              </div>
              <div class='meta'>
                <a href='https://codigo-ec.firebaseapp.com/' target='_blank'>
                  {" "}
                  Website
                </a>
                |
                <a
                  href='https://github.com/lchan217/codigo-ecuador-web'
                  target='_blank'
                >
                  {" "}
                  GitHub <Icon name='github square' />{" "}
                </a>
                <br></br>
              </div>
              <div class='description'>
                Group collaboration project working with a team in Ecuador to
                help them with creating their website
                <br />
                <br />
                <b>My Contribution:</b> Set up the Donate, Board of Directors,
                and Minor Partners pages; assisted with styling using Semantic
                UI and CSS
              </div>
            </div>
            <div class='extra content'>
              <span class='left floated'>
                <i>
                  Technologies and Frameworks: React, Redux, Semantic UI, CSS
                </i>
              </span>
            </div>
          </div>

          <div class='card'>
            <div class='image'>
              <img src='https://i.ibb.co/vLN4mzs/irene-kredenets-AWMWc-R3h-QUg-unsplash.jpg'></img>
            </div>
            <div class='content'>
              <div class='header'>My Restaurants</div>
              <div class='meta'>
                <a
                  href='https://restaurants1000.herokuapp.com/'
                  target='_blank'
                >
                  {" "}
                  Log Restaurants
                </a>
                |
                <a
                  href='https://www.youtube.com/watch?v=4wTQYPsNjJ8'
                  target='_blank'
                >
                  {" "}
                  Demo <Icon name='youtube square' />
                </a>
                |
                <a
                  href='https://github.com/lchan217/Project-3-Restaurants-Flatiron-Final'
                  target='_blank'
                >
                  {" "}
                  GitHub <Icon name='github square' />{" "}
                </a>
              </div>
              <div class='description'>
                App that allows users to enter information about restaurants and
                their menu items
              </div>
            </div>
            <div class='extra content'>
              <span class='left floated'>
                <i>Technologies and Frameworks: Rails, JavaScript, jQuery</i>
              </span>
            </div>
          </div>
        </Card.Group>

        <Card.Group itemsPerRow={itemsPerRow}>
          <div class='card'>
            <div class='image'>
              <img src='https://imgix.bustle.com/rehost/2016/9/13/70371c31-7d4c-4b46-839f-3225d06f8f99.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70'></img>
            </div>
            <div class='content'>
              <div class='header'>Hog-Iron Collaboration Project</div>
              <div class='meta'>
                <a href='https://hog-iron.herokuapp.com/' target='_blank'>
                  {" "}
                  Enroll Today{" "}
                </a>
                |
                <a
                  href='https://www.youtube.com/watch?v=1phiL0-Jcxk&feature=youtu.be'
                  target='_blank'
                >
                  {" "}
                  Demo <Icon name='youtube square' />
                </a>{" "}
                |
                <a href='https://github.com/lchan217/Hog-Iron' target='_blank'>
                  {" "}
                  GitHub <Icon name='github square' />{" "}
                </a>
              </div>
              <div class='description'>
                App where user can sign up for classes at Hogwarts <br></br>
                <br></br>
                <b>My Contribution:</b> Setting up models and controllers,
                assisted with views and debugging towards completion
              </div>
            </div>
            <div class='extra content'>
              <span class='left floated'>
                <i>Technologies and Frameworks: Rails, Bootstrap, CSS</i>
              </span>
            </div>
          </div>

          <div class='card'>
            <div class='image'>
              <img src='https://images.unsplash.com/photo-1509870925592-d67b587a2713?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'></img>
            </div>
            <div class='content'>
              <div class='header'>Animals Game</div>
              <div class='meta'>
                <a href='https://animals-game.herokuapp.com/' target='_blank'>
                  Play My Game
                </a>
                |
                <a
                  href='https://www.youtube.com/watch?v=u_D9pj6gzo8'
                  target='_blank'
                >
                  {" "}
                  Demo <Icon name='youtube square' />
                </a>
                |
                <a
                  href='https://github.com/lchan217/Project-5-Animals-Game'
                  target='_blank'
                >
                  {" "}
                  GitHub <Icon name='github square' />{" "}
                </a>
                <br></br>
              </div>
              <div class='description'>
                App where users save endangered animals, nurse them back to
                health, and release into the wild
              </div>
            </div>
            <div class='extra content'>
              <span class='left floated'>
                <i>
                  Technologies and Frameworks: React, Redux, Rails API, Semantic
                  UI
                </i>
              </span>
            </div>
          </div>
        </Card.Group>

        <Card.Group itemsPerRow={itemsPerRow}>
          <div class='card'>
            <div class='image'>
              <img src='https://images.unsplash.com/photo-1542533382-b42a59d8bd39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'></img>
            </div>
            <div class='content'>
              <div class='header'>Destination Tracker</div>
              <div class='meta'>
                <a
                  href='https://destinations1000.herokuapp.com/'
                  target='_blank'
                >
                  {" "}
                  Track Destinations{" "}
                </a>
                |
                <a
                  href='https://www.youtube.com/watch?v=A1OR5Khzv38'
                  target='_blank'
                >
                  {" "}
                  Demo <Icon name='youtube square' />
                </a>{" "}
                |
                <a
                  href='https://github.com/lchan217/Project-2-Travel'
                  target='_blank'
                >
                  {" "}
                  GitHub <Icon name='github square' />{" "}
                </a>
              </div>
              <div class='description'>
                App designed to log destinations user has visited and would like
                to visit
              </div>
            </div>
            <div class='extra content'>
              <span class='left floated'>
                <i>Technologies and Frameworks: Sinatra, CSS, Bootstrap</i>
              </span>
            </div>
          </div>

          <div class='card'>
            <div class='image'>
              <img src='https://s.gr-assets.com/assets/facebook/goodreads_wide-e23f6858b6bf20dcaf8493237a214a0e.png'></img>
            </div>
            <div class='content'>
              <div class='header'>Goodreads</div>
              <div class='meta'>
                <a
                  href='https://www.youtube.com/watch?v=xOYFTuSu-vs'
                  target='_blank'
                >
                  {" "}
                  Demo <Icon name='youtube square' />
                </a>{" "}
                |
                <a
                  href='https://github.com/lchan217/Project-1-Goodreads'
                  target='_blank'
                >
                  {" "}
                  GitHub <Icon name='github square' />{" "}
                </a>
              </div>
              <div class='description'>
                App allows users to see the 2018 Goodreads Choice Awards winners
                and their author, title, rating, and description
              </div>
            </div>
            <div class='extra content'>
              <span class='left floated'>
                <i>Technologies and Frameworks: Ruby, Nokogiri </i>
              </span>
            </div>
          </div>
        </Card.Group>
      </div>
    );
  }
}

export default Projects;
