import React, { useState } from 'react';

interface ItemCountProps {
    initial: number;
    stock: number;
    onAdd: (quantity: number) => void;
}

const ItemCount = ({ initial, stock, onAdd } : ItemCountProps) => {
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        onAdd(count);
    };

    return (
        <div className='item-count'>
            <button onClick={handleDecrement}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleAdd}>Add to Cart</button>
        </div>
    );

};

export default ItemCount;