
import { Children, createContext } from "react" 
import { useState } from "react"

export const counterContextObj = createContext()

function ContextProvider({ children }) { 
    const [counter, setCounter] = useState(10);
    //const [counter1, setCounter1] = useState(10)
    
    const changeCounter = () => {
         setCounter(counter + 1)
    }
    /*const changeCounter1 = () => {
         setCounter1(counter1 + 1)
    }*/

  return (
   <counterContextObj.Provider value={{ counter, changeCounter}}>
      {children} 
   </counterContextObj.Provider>
  )
}

export default ContextProvider;
