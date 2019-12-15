import React from "react";

const Contact = () => {
  return (
    <div className='contactInfo' style={{ textAlign: "center" }}>
      <h1> Get In Touch </h1>
      Feel free to reach out with any questions. I am always happy to connect!{" "}
      <br /> <br />
      <a href='mailto:lchan217@gmail.com'>
        <i class='envelope outline icon'></i>
      </a>
      <a href='https://www.linkedin.com/in/elizabethchan1234/' target='_blank'>
        <i class='large linkedin icon'></i>
      </a>
      <a href='https://github.com/lchan217' target='_blank'>
        <i class='large github icon'></i>
      </a>
      <a href='https://medium.com/@lchan217' target='_blank'>
        <i class='medium icon'></i>
      </a>
      <br /> <br />
      <img src='https://i.ibb.co/nkydFFD/20180423-141220.jpg' /> <br />
    </div>
  );
};

export default Contact;
