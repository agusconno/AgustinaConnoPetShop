import React from 'react'
import { useParams } from 'react-router-dom'; // Importa el hook useParams
import { Center } from '@chakra-ui/react';
import ItemDetail from './ItemDetail';
import gatosBaño from '../assets/gatitoMojado.jpg';
import perroBaño from '../assets/perritoMojado.jpg';
import sport from '../assets/sport.jpg';
import abrigo from '../assets/abrigo.jpg';
import pilotos from '../assets/pilotos.jpg';
import juguetes from '../assets/juguetes.jpg';
import pretales from '../assets/pretales.jpg';

const ItemDetailContainer = () => {
   
    const productos = [
      { id: 1, nombre: "Gatos", description: "Baño y Corte", stock: 1, category: "cat1", src: gatosBaño },
      { id: 2, nombre: "Perros", description: "Baño y Corte", stock: 1, category: "cat1", src: perroBaño },
      { id: 3, nombre: "Sport", description: "Variedad de talles y modelos", stock: 5, category: "cat2", src: sport },
      { id: 4, nombre: "Abrigos", description: "Variedad de talles y modelos", stock: 5, category: "cat2", src: abrigo },
      { id: 5, nombre: "Pilotos", description: "Variedad de talles y modelos", stock: 3, category: "cat2", src: pilotos },
      { id: 6, nombre: "Pretales", description: "Todos los tamaños", stock: 10, category: "cat3", src: pretales },
      { id: 7, nombre: "Juguetes", description: "Perros y gatos", stock: 15, category: "cat3", src: juguetes },
    ]
  
    const getProductos = new Promise((resolve, reject)=> {
      if ( productos.length > 0) {
        setTimeout(() => {
          resolve(productos);
        }, 2000)
        } else{
        reject(new Error ("No hay datos"))
      }
    })
  
    getProductos
      .then((res) => {
        console.log("Productos obtenidos:", res);
     })
     .catch((error) => {
      console.log("Error al obtener los datos:", error);
     })
  
     
    return (
      <>
      <ItemDetail
          productos={productos}
          />
      </>
    )
     
  }

export default ItemDetailContainer
