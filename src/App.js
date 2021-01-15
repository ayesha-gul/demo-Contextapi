import React, { useState } from 'react';
import Parent from './parent';
import ValueContext from './valueContext';


function App() {
  //let [number,setNumber] = useState(20);
  let value=useState(16)

  return(
       <ValueContext.Provider value={value} >
         <div>
           Context Api :)
           <Parent></Parent>
          
         </div>
         </ValueContext.Provider>
  );
  

}

export default App;
