import React, { useState } from 'react';

const Counter = ({ stock, onAdd, min, sum, res }) => {
    const [count, setCount] = useState(min)

    function handleAdd() {
        if (count < stock)
            setCount(count + sum)
    }

    function handleSubstract() {
        if (count >= min)
            setCount(count - res)
    }

    return (
        <div>
            <div className="mb-1">
                <button className="text-xl" onClick={handleSubstract} >  -  </button>
                <span className="text-xl" > {count} </span>
                <button className="text-xl" onClick={handleAdd} >  +  </button>
            </div>
            <button className="text-gray-800 title-font text-lg font-medium hover:text-green-800" onClick={() => onAdd(count)} >Agregar al carrito</button>
        </div>

    );
}


export default Counter;