import React, { useEffect, useState } from 'react';
import { Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  console.log('ID from useParams:', id);


  useEffect(() => {
    const db = getFirestore();
    const productoDoc = doc(db, 'Items', id); // Cambiado a 'Items' según el nombre de tu colección en Firestore
    console.log('ProductoDoc:', productoDoc);

    console.log('Fetching product with ID:', id);

    getDoc(productoDoc)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const productData = docSnapshot.data();
          console.log('Product data:', productData);
          setProducto(productData);
        } else {
          console.log('El producto no existe');
        }
      })
      .catch((error) => {
        console.error('Error al obtener el producto:', error);
      });
  }, [id]);

  console.log('Render - producto:', producto);

  return (
    <Center p='1rem'>
      {producto ? <ItemDetail producto={producto} /> : <div>Cargando...</div>}
    </Center>
  );
}

export default ItemDetailContainer;




