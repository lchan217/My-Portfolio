import React from "react";
import ContactInfo from "./contact/ContactInfo";
import { Image } from "semantic-ui-react";
//
// <p>Check out the Other Interests tab for some of my favorite things. I am always happy to give
//   advice and hear recommendations!</p>

const About = () => {
  return (
    <div className='aboutMe'>
      <div className='center'>
        <h2>Hi There!</h2>
      </div>
      <br></br>
      <div className='center'>
        <Image
          centered='true'
          size='small'
          rounded='true'
          src='https://i.ibb.co/zfwHPyz/london-copy.jpg'
          alt='pic of site owner'
        />
      </div>
      <br />
      <p>
        I am a Full Stack Web Developer and Certified Public Accountant with
        five years of experience in financial accounting. I recently graduated
        from Flatiron School’s Full Stack Software Engineering Program, and I’m
        excited to begin working in a country outside of the United States!
        Attention to detail and ability to think logically in all areas of life
        have made learning Ruby on Rails, JavaScript, and React a strength of
        mine.
      </p>
      <p>
        Prior to Flatiron School, I graduated from the University of Dayton with
        degrees in Accounting and Music Performance, then moved back to Chicago
        to work in corporate accounting. As a former CPA, I have financial
        competence closing time-sensitive financial statements, and I have
        expertise using systems such as SAP, Blackline, and Hyperion Financial
        Management. During this time, I worked in a shared service center,
        appeasing customer needs and proactively providing them data before they
        realized they needed it.
      </p>
      <p>
        In November 2017, I took a gap year to travel Southeast Asia and some of
        Europe. When I came back to the states, I talked with a friend who had
        completed a coding bootcamp and he thought it would be a great fit for
        me. When working through sample courses, I liked the satisfaction of
        passing the tests and how getting the desired output naturally clicked
        for me. My brain is meant for coding because I am able to break down a
        big process in detail, follow the flow, and fix the bug independently.
      </p>
      <p>
        Over the last year I worked for CaddieNow as a Full Stack Developer, until January 2021
        when I was laid off unexpectedly. I gained experience picking up on existing patterns and
        integrating new features with little to no guidance as well as reinforcing my knowledge
        of Ruby on Rails and React.
      </p>
      <p>
        I look forward to expanding my knowledge of languages, contributing my
        persistent work ethic, and changing my career to something I am
        passionate about.
      </p>

      <br />
      <ContactInfo />
    </div>
  );
};

export default About;
