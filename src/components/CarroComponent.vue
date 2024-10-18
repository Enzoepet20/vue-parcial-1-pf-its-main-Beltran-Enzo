<script setup lang="ts">
import { useCartStore } from '@/stores/cartStore';
import type { Book } from '@/models/BookModel';

// Instancia del store del carrito
const cartStore = useCartStore();

// Definición de la propiedad booksCart
const booksCart = cartStore.getCartItems();

// Función para limpiar el carrito
const limpiarCarrito = () => {
  cartStore.clearCart();
};

// Función para eliminar un libro del carrito
const removeBook = (book: Book) => {
  cartStore.removeFromCart(book);
};

// Función para agregar más cantidad del mismo libro
const addBook = (book: Book) => {
  cartStore.addToCart(book);
};

</script>

<template>
    <div class="cart-container">
      <h1 class="text-2xl font-bold mb-4">Carrito de Compras</h1>
  
      <div v-if="booksCart.length > 0" class="cart-items-container">
        <div class="cart-items">
          <div v-for="book in booksCart" :key="book.id" class="cart-item">
            <img :src="book.coverImg" :alt="book.title" class="item-img" />
            <div class="item-details">
              <h2 class="item-title">{{ book.title }}</h2>
              <p class="item-author">{{ book.author }}</p>
              <div class="item-controls">
                <button @click="removeBook(book)" class="remove-btn">-</button>
                <span>{{ book.price }} USD</span>
                <button @click="addBook(book)" class="add-btn">+</button>
              </div>
            </div>
          </div>
        </div>
  
        <div class="cart-summary">
          <h2>Total: {{ cartStore.getCartTotal() }} USD</h2>
          <button @click="limpiarCarrito" class="clear-btn">Limpiar Carrito</button>
        </div>
      </div>
  
      <div v-else>
        <p>Tu carrito está vacío</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .cart-container {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .cart-items-container {
    max-height: 400px; /* Altura fija para el contenedor */
    overflow-y: auto; /* Permitir desplazamiento vertical */
    padding-right: 10px; /* Ajuste de espacio para la barra de desplazamiento */
  }
  
  .cart-items {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .item-img {
    width: 80px;
    height: auto;
  }
  
  .item-details {
    flex: 1;
    margin-left: 20px;
  }
  
  .item-title {
    font-size: 1.2em;
    font-weight: bold;
  }
  
  .item-author {
    font-size: 0.9em;
    color: #555;
  }
  
  .item-controls {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .add-btn, .remove-btn {
    padding: 5px 10px;
    font-size: 1.2em;
    cursor: pointer;
  }
  
  .add-btn {
    background-color: #4caf50;
    color: white;
  }
  
  .remove-btn {
    background-color: #f44336;
    color: white;
  }
  
  .cart-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.2em;
    margin-top: 20px;
  }
  
  .clear-btn {
    background-color: #f44336;
    color: white;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
  </style>
  
