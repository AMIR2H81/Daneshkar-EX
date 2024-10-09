/* eslint-disable no-unused-vars */
import React, { Fragment, useState } from "react";

const Button = ()=>{
    const [isTextHidden, setTextHidden] = useState(true);

    const onClick = () => setTextHidden(!isTextHidden);
  
    return (
      <div>
        {!isTextHidden ? <Text /> : null}
        <button onClick={onClick}>{isTextHidden ? 'Show' : 'Hide'}</button>
      </div>
    );
}
  
const Text = () => <h1>Hello World!</h1>;

export default Button;