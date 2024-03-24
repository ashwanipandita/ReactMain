// import { useContext } from "react";
// import { MyCounterContext } from "./context/CounterContext";
// import { AuthContext } from "./context/AuthContext";
// import {ThemeContext} from "./context/ThemeContext"



// function Home() {
//     const { counter, Increment,Decrement,Reset } = useContext(MyCounterContext);
//     const { state } = useContext(AuthContext)
//     const { theme } = useContext(ThemeContext)
//     console.log(state, "state")
//     return (
//         <div style={{background: theme === light ? "white" :'black'}}>
//             <h1>Home Page welcome - {state?.user?.name}</h1>
//             <h2>Counter : {counter} </h2>
//             <button onClick={Increment}>+</button>
//             <button onClick={Decrement}>-</button>
//             <button onClick={Reset}>Reset</button>
//         </div>
//     )
// }


// export default Home;


// Home.jsx
import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { MyCounterContext } from "./context/CounterContext";

function Home() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { counter, Increment, Decrement, Reset } = useContext(MyCounterContext);

    const handleLightTheme = () => {
        toggleTheme();
    };

    const handleDarkTheme = () => {
        toggleTheme();
    };

    return (
        <div style={{ background: theme === "light" ? "white" : "grey" }}>
            <h1>Home Page</h1>
            <h2>Counter: {counter}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={handleLightTheme}>Switch to Light Theme</button>
            <button onClick={handleDarkTheme}>Switch to Dark Theme</button>
        </div>
    );
}

export default Home;

