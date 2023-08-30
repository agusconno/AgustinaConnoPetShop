import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { Center } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import gatosBaño from '../assets/gatitoMojado.jpg';
import perroBaño from '../assets/perritoMojado.jpg';
import sport from '../assets/sport.jpg';
import abrigo from '../assets/abrigo.jpg';
import pilotos from '../assets/pilotos.jpg';
import juguetes from '../assets/juguetes.jpg';
import pretales from '../assets/pretales.jpg';

const ItemListContainer = () => {
  const { category } = useParams();
  const productos = [
    { id: 1, nombre: "Gatos", description: "Baño y Corte", precio: 50, category: "cat1", src: gatosBaño },
    { id: 2, nombre: "Perros", description: "Baño y Corte", precio: 30, category: "cat1", src: perroBaño },
    { id: 3, nombre: "Sport", description: "Variedad de talles y modelos", precio: 45, category: "cat2", src: sport },
    { id: 4, nombre: "Abrigos", description: "Variedad de talles y modelos", precio: 50, category: "cat2", src: abrigo },
    { id: 5, nombre: "Pilotos", description: "Variedad de talles y modelos", precio: 90, category: "cat2", src: pilotos },
    { id: 6, nombre: "Pretales", description: "Todos los tamaños", precio: 100, category: "cat3", src: pretales },
    { id: 7, nombre: "Juguetes", description: "Perros y gatos", precio: 30, category: "cat3", src: juguetes },
  ]

  const getProductos = new Promise ((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout (() => {
        resolve(productos);
      }, 2000)
    } else{
      reject(new Error("No hay Datos"))
    }
  })
  
  getProductos
  .then((res)=>{
    console.log('Res', res[category])
  })
  .catch((error)=> { 
    console.log(error)
  })

  const filteredProducts = productos.filter ((producto)=> producto.category === category)

  return (
    <Center p='1rem'>
    <ItemList
    productos={filteredProducts}
    />
    </Center>
  )
    }

     
    
export default ItemListContainer;


