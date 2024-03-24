import React from 'react';
import { Increment, Decrement } from '../redux/actions/Counter.actions';
import { useDispatch, useSelector } from 'react-redux';
import './CounterRedux.css'; // Import your CSS file for styling

const CounterRedux = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter.counter);

    return (
        <div className="counter-container"> {/* Add a container with a class */}
            <h1>{counter}</h1>
            <button onClick={() => dispatch(Increment())}>+</button>
            <button onClick={() => dispatch(Decrement())}>-</button>
        </div>
    );
};

export default CounterRedux;
