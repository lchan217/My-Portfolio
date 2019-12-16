import React, { Component } from "react";
import { render } from "react-dom";

class Contact extends Component {
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
      picHeight = 200;
    } else {
      picWidth = 660;
      picHeight = 500;
    }
    return (
      <div className='contactInfo center'>
        <h1> Get In Touch </h1>
        Feel free to reach out with any questions. I am always happy to connect!{" "}
        <br /> <br />
        <a href='mailto:lchan217@gmail.com'>
          <i class='envelope outline icon'></i>
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
          <i class='medium icon'></i>
        </a>
        <br /> <br />
        <img
          width={picWidth}
          height={picHeight}
          src='https://i.ibb.co/nkydFFD/20180423-141220.jpg'
        />{" "}
        <br />
      </div>
    );
  }
}

export default Contact;
