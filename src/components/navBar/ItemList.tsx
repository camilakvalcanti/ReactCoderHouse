import React from "react";
import Item from "./Item";

interface ItemListProps {
  items: {
    id?: string;
    title?: string;
    description?: string;
    price?: number;
    pictureUrl?: string;
  }[];
}

const ItemList = ({ items }: ItemListProps) => {
    return (
      <div className="item">
        {items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            pictureUrl={item.pictureUrl}/>
        ))}
      </div>
    );
  };

  export default ItemList;