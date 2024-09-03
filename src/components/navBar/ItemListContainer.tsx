import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { fetchItems } from "../mockData";

const ItemListContainer = () => {
    const [items, setItems] = useState<{
    id?: string;
    title?: string;
    description?: string;
    price?: number;
    pictureUrl?: string;
}[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getItems = async () => {
        try {
            const fetchedItems = await fetchItems();
            setItems(fetchedItems);
        } catch (error) {
            console.error('Erro ao buscar os itens:', error);
        } finally {
            setLoading(false);
        }
    };

    getItems();
}, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
