import React from "react";

const ContactInfo = () => {
  return (
    <div className='contactInfo center'>
      <a href='mailto:lchan217@gmail.com'>
        <i class='envelope large outline icon'></i>
      </a>
      <a href='https://www.linkedin.com/in/elizabethchan1234/' target='_blank'>
        <i class='large linkedin icon'></i>
      </a>
      <a href='https://github.com/lchan217' target='_blank'>
        <i class='large github icon'></i>
      </a>
      <a href='https://medium.com/@lchan217' target='_blank'>
        <i class='edit outline icon'></i>
      </a>
    </div>
  );
};

export default ContactInfo;
