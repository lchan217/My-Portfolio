import React, { Component } from "react";
import ContactInfo from "./ContactInfo";

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
      <div className='contact-page center'>
        <h1> Get In Touch </h1>
        Feel free to reach out with any questions. I am always happy to connect!{" "}
        <br /> <br />
        <ContactInfo />
        <br /> <br />
        <img
          width={picWidth}
          height={picHeight}
          src='https://i.ibb.co/nkydFFD/20180423-141220.jpg'
          alt='pic of site owner'
        />{" "}
        <br />
      </div>
    );
  }
}

export default Contact;
