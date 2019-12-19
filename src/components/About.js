import React from "react";
import ContactInfo from "./ContactInfo";
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
        <img
          // src='https://i.ibb.co/zsd76cr/20190916-121928-2.jpg'
          src='https://i.ibb.co/zfwHPyz/london-copy.jpg'
          alt='20180201-153404'
          width={125}
          height={185}
        ></img>
      </div>
      <br />
      <p>
        I am a Full Stack Web Developer and Certified Public Accountant with
        five years of experience in financial accounting. Attention to detail
        and ability to think logically in all areas of life have made learning
        Rails, JavaScript, and React a strength of mine.
      </p>
      <p>
        Prior to Flatiron School, I graduated from the University of Dayton with
        degrees in Accounting and Music Performance, then moved back to Chicago
        to work in corporate accounting. I have financial competence closing
        time-sensitive financial statements, and I have expertise using systems
        such as SAP, Blackline, and Hyperion Financial Management. During this
        time, I worked in a shared service center, appeasing customer needs and
        proactively giving them data they didn’t know they needed.
      </p>
      <p>
        In November 2017, I took a gap year to travel Southeast Asia with my
        friend and solo travel in Europe. When I came back to the states, a
        friend who had done a coding bootcamp thought it would be a great fit
        for me. I did a few sample lessons and things really clicked for me. My
        brain is meant for coding in the way my thoughts flow and things all
        come together logically. I am really happy I made the choice to change
        careers. Plus coding was one of the top jobs for remote work!
      </p>
      <p>
        I can’t wait to start working in a foreign country, when I will know
        what languages to focus on and become an expert in. More importantly,
        it’s exciting to be learning something new every day in a group and
        independently.
      </p>

      <br />
      <ContactInfo />
    </div>
  );
};

export default About;
