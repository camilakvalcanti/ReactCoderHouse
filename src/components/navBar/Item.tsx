import React from "react";

interface ItemProps {
    id?: string;
    title?: string;
    description?: string;
    price?: number;
    pictureUrl?: string;
}

const Item = ({ id, title, description, price, pictureUrl }: ItemProps) => {
    return (
        <div className="item-card">
            {pictureUrl && <img src={pictureUrl} alt={title} />}
            <h2>{title}</h2>
            <p>{description}</p>
            {price !== undefined && <p>{price}</p>}
        </div>
    );
};

export default Item;