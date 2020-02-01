import React from "react";
import ContactInfo from "./ContactInfo";
import { Image } from "semantic-ui-react";

const Contact = () => {
  return (
    <div className='contact-page center'>
      <h1> Get In Touch </h1>
      Feel free to reach out with any questions. I am always happy to connect!{" "}
      <br /> <br />
      <ContactInfo />
      <br /> <br />
      <Image
        src='https://i.ibb.co/nkydFFD/20180423-141220.jpg'
        alt='pic of site owner'
        centered='true'
      />
      <br />
    </div>
  );
};

export default Contact;
