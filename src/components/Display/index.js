import React from 'react';
import { Textfit } from "react-textfit";
import  './display.css';


function Display({value}) {
 
       
    return (
      <Textfit className="display" mode="single" max={70}>
        {value}
      </Textfit>
    );
    
    
  
}

export default Display;

