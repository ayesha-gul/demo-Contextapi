import React, { useContext } from 'react';
import valueContext from './valueContext';

function Child(Props) {
    let value = useContext(valueContext);
  return(
         <div>child number is {value[0]}
         <button onClick={
             ()=>{value[1](++value[0])}}>
                 update value
             </button>
                     </div>
  );
  

}

export default Child;