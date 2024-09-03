import React from "react";

interface ItemDetailProps {
    item: {
        id: string;
        title: string;
        description: string;
        price: number;
        pictureUrl: string;
    };
}

const ItemDetail = ({item}: ItemDetailProps) => {
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