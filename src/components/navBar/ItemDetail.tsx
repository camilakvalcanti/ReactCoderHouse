import React from 'react';
import { useCart } from './CartContext';


interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

interface ItemDetailProps {
  item: Item;
}

const ItemDetail = ({ item }: ItemDetailProps) => {
    const { addItem, isInCart } = useCart();

    const handleAddToCart = () => {
        const cartItem = {
            id: item.id,
            name: item.title,
            price: item.price,
            quantity: 1
        };

        addItem(cartItem, 1);
    }

  return (
    <div className="item-detail">
      {item.pictureUrl && <img src={item.pictureUrl} alt={item.title} />}
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>Preço: ${item.price.toFixed(2)}</p>
    </div>
  );
};

export default ItemDetail;
