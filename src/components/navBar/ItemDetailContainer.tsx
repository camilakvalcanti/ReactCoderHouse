// ItemDetailContainer.tsx
import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import axios from "axios";
import { useParams } from 'react-router-dom';

interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  pictureUrl: string;
}

const ItemDetailContainer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Item | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getItem = async () => {
      try {
        const response = await axios.get(`https://api.example.com/items/${id}`);
        setItem(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(`Erro ao buscar o item: ${error.message}`);
        } else {
          setError('Erro desconhecido ao buscar o item.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getItem();
    } else {
      setError('ID do item não encontrado.');
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Detalhes do Produto</h1>
      {item ? <ItemDetail item={item} /> : <div>Item não encontrado</div>}
    </div>
  );
};

export default ItemDetailContainer;


