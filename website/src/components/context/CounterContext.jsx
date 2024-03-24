// import React, { useState } from 'react'
// import { createContext } from 'react';

// export const MyCounterContext = createContext();

// // HOC Higher order component - props component
// const ProviderCounterContext = ({ children }) => { //  children - <App/>
//     const [counter, setCounter] = useState(1)
//     function Increment() {
//         setCounter(counter + 1)
//     }
//     return (
//         <MyCounterContext.Provider value={{ counter, Increment }}>
//             {children}
//         </MyCounterContext.Provider>
//     )
// }

// export default ProviderCounterContext

// -----------
// import React from 'react'

// const ProviderCounterContext = () => {
//   return (
//     <div><h1>ProviderCounterContext</h1></div>
//   )
// }

// export default ProviderCounterContext




import React, { createContext, useState } from 'react'

export const MyCounterContext=createContext();

const ProviderCounterContext = ({children}) => {
    const[counter , setCounter] =useState(0)
    function Increment(){
        setCounter(counter + 10)
    }
    function Decrement() {
              setCounter(counter - 10)
          }
          function Reset() {
              setCounter(0)
          }
  return (
    <div>
         <MyCounterContext.Provider value={{counter,Increment, Decrement,Reset}}>
              {children}
         </MyCounterContext.Provider>
         
    </div>
  )
}

export default ProviderCounterContext