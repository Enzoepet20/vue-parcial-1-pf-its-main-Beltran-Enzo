<script setup lang="ts">
import { useBookStore } from '@/stores/BookStore';
import type { Book } from '@/models/BookModel'
import { useCartStore} from '@/stores/cartStore';


// libreria
import Rating from 'primevue/rating';

const cartStore = useCartStore();
const booksCart: Book[] = cartStore.getCartItems();


</script>

<template>
    <div class="wrapper">
        <h1 class="w-full my-4 p-4 text-4xl">Tienda</h1>
        <div
            class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-2 p-2">
            <div v-for="book in booksCart" :key="book.id" class="">
                <div class="img-cover">
                    <img :src="book.coverImg" v-bind:alt="book.title">
                </div>
                <div class="book-title">{{ book.title }}</div>
                <div class="book-series">{{ book.series }}</div>
                <div class="book-author">{{ book.author }}</div>
                <Rating class="star" v-model="book.rating" :stars="5" />
                <div class="publisher">{{ book.publisher }}</div>
                <div class="price">$ {{ book.price }}.00</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    margin: auto;
    width: 100vw;
    max-width: 100vw;
    padding: 24px 48px;
    position: relative;
    background: #e5e5e5;
}




.book-title {
    width: 50%;
    height: 1.25em;
    line-height: 0.5em;
    font-weight: 200;
    font-size: 0.55em;
    text-align: center;
    text-wrap: wrap;
    margin-top: 4px;
}

.star {
    display: flex;
    width: fit-content;
    flex-direction: row;
    justify-content: space-between;
    margin: 2px 0;
}

.price {
    font-size: 0.75em;
    font-weight: 300;
}
</style>