import React from "react";
import { Icon } from "semantic-ui-react";

const ContactInfo = () => {
  return (
    <div className='contactInfo center'>
      <a href='mailto:lchan217@gmail.com'>
        <Icon color='violet' className='envelope large outline icon'></Icon>
      </a>
      <a
        href='https://www.linkedin.com/in/elizabethchan1234/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon color='violet' className='large linkedin icon'></Icon>
      </a>
      <a
        href='https://github.com/lchan217'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon color='violet' className='large github icon'></Icon>
      </a>
      <a
        href='https://medium.com/@lchan217'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Icon color='violet' className='large medium icon'></Icon>
      </a>
    </div>
  );
};

export default ContactInfo;
