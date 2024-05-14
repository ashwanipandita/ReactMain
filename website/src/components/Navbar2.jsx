import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Navbar2 = ({ search, handleChange }) => {
    const { state } = useContext(AuthContext); // Use parentheses, not square brackets
    return (
        <div>
            <h2>Search Products from Navbar</h2>
            <input placeholder="Mens.." value={search} onChange={handleChange} />
            {state?.user?.name && <h1>{state?.user?.name}</h1>}
            {state?.user?.role ? <h1>Logout</h1> : <h2>Login</h2>}
        </div>
    );
};

export default Navbar2;



