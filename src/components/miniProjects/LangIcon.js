import React from "react";
import { Icon } from "semantic-ui-react";

const LangIcon = footer => {
  return (
    <div className='center'>
      {footer.footer.map(lang => {
        return <Icon name={`${lang}`} />;
      })}
    </div>
  );
};

export default LangIcon;
