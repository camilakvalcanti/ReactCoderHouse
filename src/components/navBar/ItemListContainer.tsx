import React from "react";

interface ItemProps {
    id?: string;
    title?: string;
    description?: string;
    price?: number;
    pictureUrl?: string;
}

const ItemListContainer = ({id, title, description, price, pictureUrl}: ItemProps) => {
    return (
      <div className="item">
        <img src={pictureUrl} alt={title} />
        <h2>{title}</h2>
        <p>Preço: R${price}</p>
      </div>
    );
  };

  export default ItemListContainer;