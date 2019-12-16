import React, { Component } from "react";
//
// <p>Check out the Other Interests tab for some of my favorite things. I am always happy to give
//   advice and hear recommendations!</p>

class About extends Component {
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

    let picHeight;
    let picWidth;

    if (isMobile) {
      picWidth = 250;
      picHeight = 400;
    } else {
      picWidth = 400;
      picHeight = 550;
    }

    return (
      <div className='aboutMe'>
        <div style={{ textAlign: "center" }}>
          <h2>Hi There!</h2>
        </div>
        <br></br>
        <p>
          I am a full stack web developer and Certified Public Accountant with
          five years of experience in financial accounting. I have financial
          competence closing time-sensitive financial statements, and I have
          expertise using systems such as SAP, Blackline, and Hyperion Financial
          Management. Attention to detail and ability to think logically have
          made learning Rails, JavaScript, and React a strength of mine.{" "}
        </p>
        <p>
          In November 2017, I took a gap year to travel Southeast Asia with my
          friend and solo travel in Europe. When I came back to the states, a
          friend who had done a coding bootcamp thought it would be a great fit
          for me. I did a few sample courses and really liked the way of
          thinking, plus coding was one of the top jobs for remote work! One
          day, I hope to travel while working or live in a foreign country.{" "}
        </p>
        <p>
          In my spare time, you can find me reading a book, listening to a
          podcast, or trying a new type of cheese. The picture below is from
          when I visited the world's first cheese conveyor belt in London. I was
          in heaven!
        </p>
        <div style={{ textAlign: "center" }}>
          <img
            src='https://i.ibb.co/zsd76cr/20190916-121928-2.jpg'
            alt='20180201-153404'
            width={picWidth}
            height={picHeight}
          ></img>
        </div>{" "}
        <br />
        <p></p>
        <div className='contactInfo' style={{ textAlign: "center" }}>
          <a href='mailto:lchan217@gmail.com'>
            <i class='envelope large outline icon'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/elizabethchan1234/'
            target='_blank'
          >
            <i class='large linkedin icon'></i>
          </a>
          <a href='https://github.com/lchan217' target='_blank'>
            <i class='large github icon'></i>
          </a>
          <a href='https://medium.com/@lchan217' target='_blank'>
            <i class='edit outline icon'></i>
          </a>
        </div>
      </div>
    );
  }
}

export default About;
