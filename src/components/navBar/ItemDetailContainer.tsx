import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { fetchItem } from "../mockData";

interface Item {
    id: string;
    title: string;
    description: string;
    price: number;
    pictureUrl: string;
}

interface ItemListContainerProps {
    itemId: string;
}

const ItemDetailContainer = ({itemId}: ItemListContainerProps) => {
    const [item, setItem] = useState<Item | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getItem = async () => {
            try {
                const fetchedItem = await fetchItem(itemId);
                setItem(fetchedItem ?? null);
            } catch (error) {
                console.error('Erro ao buscar o item:', error);
            } finally {
                setLoading(false);
            }
        };

        getItem();
    }, [itemId]);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>Detalhes do Produto</h1>
            {item ? <ItemDetail item={item} /> : <div>Item não encontrado</div>}
        </div>
    );
};

export default ItemDetailContainer;