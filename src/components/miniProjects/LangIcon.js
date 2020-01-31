import React from "react";
import { Icon } from "semantic-ui-react";

const LangIcon = tech => {
  return (
    <div className='center'>
      {tech.tech.map(lang => {
        return <Icon name={`${lang}`} />;
      })}
    </div>
  );
};

export default LangIcon;
