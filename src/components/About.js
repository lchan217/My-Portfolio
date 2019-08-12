import React from 'react';

const About = () => {
  return (
    <div className="aboutMe">
      <div  style={{textAlign:"center"}}>
        <h2>Hi There!</h2>
        <img src="https://i.ibb.co/hBQ0hb9/20180201-153404.jpg" alt="20180201-153404" width={250} height={350}></img>
      </div><br></br>
        <p>I am a full stack web developer, and Certified Public Accountant with five years of
        experience in financial accounting.
        I have financial competence closing time-sensitive financial statements, and I have expertise using systems such as SAP,
        Blackline, and Hyperion Financial Management. </p>

        <p>In November 2017, I quit my job to travel Southeast Asia with my friend and solo travel in Europe. When I came back to
        the states, a friend who had done a coding bootcamp thought it would be a great fit for me. I did a few sample courses
        and really liked the way of thinking, plus coding was one of the top jobs for remote work! One day, I hope to travel
        while working. </p>

        <p>Attention to detail and ability to think logically have made learning Rails,
        JavaScript, and React a strength of mine. I look forward to expanding my knowledge of languages, contributing my
        persistent work ethic, and changing my career to something I am passionate about.</p>

      <p>Check out the Other Interests tab for some of my favorite things. I am always happy to give
        advice and hear recommendations!</p>

      <div className="contactInfo" style={{textAlign:"center"}}>
        <div><i class="envelope outline icon"></i>Email: Lchan217@gmail.com</div><br></br>
        <a href="https://www.linkedin.com/in/elizabethchan1234/" target="_blank"><i class="large linkedin icon"></i></a>
        <a href="https://github.com/lchan217" target="_blank"><i class="large github icon"></i></a>
        <a href="https://lchan217.github.io/" target="_blank"><i class="edit outline icon"></i></a>
      </div>
    </div>
  );
};

export default About;
