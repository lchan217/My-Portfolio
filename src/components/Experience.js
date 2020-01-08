import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";

class Experience extends Component {
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
    isMobile ? (itemsPerRow = 2) : (itemsPerRow = 4);
    return (
      <div className='experience'>
        <Card.Group itemsPerRow={3}>
          <div class='card'>
            <div class='image'>
              <img src='https://i.imgur.com/AVeu2yG.png'></img>
            </div>
          </div>

          <div class='card'>
            <div class='image'>
              <img src='https://i.imgur.com/0xJGBER.jpg'></img>
            </div>
          </div>

          <div class='card'>
            <div class='image'>
              <img src='https://i.imgur.com/PFlNouF.jpg'></img>
            </div>
          </div>
        </Card.Group>
        <br />
        <br />
        <a
          href='https://drive.google.com/file/d/1IVrecKvCZIiAYMBLgmAyyBfdXttju83h/view?usp=sharing'
          target='_blank'
        >
          <i class='download icon'></i>VIEW FULL RESUME
        </a>
        <h2>
          <u>Languages and Frameworks</u>
        </h2>
        <Grid columns={itemsPerRow}>
          <Grid.Column key={1}>Ruby on Rails</Grid.Column>
          <Grid.Column key={2}>JavaScript</Grid.Column>
          <Grid.Column key={3}>React</Grid.Column>
          <Grid.Column key={4}>Sinatra</Grid.Column>
          <Grid.Column key={5}>jQuery</Grid.Column>
          <Grid.Column key={6}>ActiveRecord</Grid.Column>
          <Grid.Column key={7}>PostgreSQL</Grid.Column>
          <Grid.Column key={8}>SQLite</Grid.Column>
          <Grid.Column key={9}>CSS</Grid.Column>
          <Grid.Column key={10}>HTML</Grid.Column>
          <Grid.Column key={11}>Semantic UI</Grid.Column>
          <Grid.Column key={12}>Git</Grid.Column>
        </Grid>
        {/* <div class='ui grid'>
        <div class='five wide column'>Ruby on Rails</div>
        <div class='five wide column'>Sinatra</div>
        <div class='five wide column'>JavaScript</div>
        <div class='five wide column'>jQuery</div>
        <div class='five wide column'>ActiveRecord</div>
        <div class='five wide column'>PostgreSQL</div>
        <div class='five wide column'>SQLite</div>
        <div class='five wide column'>CSS</div>
        <div class='five wide column'>HTML</div>
        <div class='five wide column'>Semantic UI</div>
        <div class='five wide column'>Bootstrap</div>
      </div> */}
        <h2>
          <u>My Experience</u>
        </h2>

        <div>
          <b>Mars, Incorporated</b>
        </div>
        <i>
          Senior Accounting Specialist - Fixed Assets and General Accounting,
          February 2014 - November 2017
        </i>
        <ul>
          <li>
            Analyzed the general ledger and identified variances to plant
            managers ahead of schedule
          </li>
          <li>
            Utilizing pivot tables, vlookups and conditional formatting in
            Excel, generated cost and labor reports
          </li>
          <li>
            Validated data and performed transactions as necessary using SAP
          </li>
        </ul>

        <div>
          <b>Mondelez International (Formerly Kraft Foods)</b>
        </div>
        <i>Senior Financial Associate, June 2012- February 2014</i>
        <ul>
          <li>
            Managed general ledger and provided accounting support and
            reconciled accounts during the month-end close
          </li>
          <li>
            Performed extensive review of account reconciliations, provided
            feedback, and presented findings to upper management
          </li>
        </ul>

        <div>
          <b>Graduate of University of Dayton 2012</b>
        </div>
        <ul>
          <li>Bachelor of Science in Accounting </li>
          <li>Bachelor of Music in Performance </li>
        </ul>
      </div>
    );
  }
}

export default Experience;
