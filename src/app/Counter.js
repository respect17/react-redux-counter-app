// src/app/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';

const Counter = () => {
    const count = useSelector(state => state.counter);
    const dispatch = useDispatch();

    return (
        <div>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};

export default Counter;