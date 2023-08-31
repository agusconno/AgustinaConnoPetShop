import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const ItemListContainer = () => {
  const { category } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const productosCollection = collection(db, 'Items'); 

    const q = query(productosCollection, where('category', '==', category));

    getDocs(q)
      .then((querySnapshot) => {
        const products = [];
        querySnapshot.forEach((doc) => {
          products.push({ ...doc.data(), id: doc.id });
        });
        setProductos(products);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
      });
  }, [category]);

  return (
    <Center p='1rem'>
      <ItemList productos={productos} />
    </Center>
  );
}

export default ItemListContainer;




