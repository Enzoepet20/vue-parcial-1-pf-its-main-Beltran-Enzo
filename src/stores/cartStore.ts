import { defineStore } from "pinia";
import type { Book } from '@/models/BookModel';

interface CartState {
    items: Book[];
    total: number;
}

export const useCartStore = defineStore({
    id: 'cart',
    state: (): CartState => ({
        items: [],
        total: 0,
    }),
    actions: {
        addToCart(book: Book): void {
            this.items.push(book);
            this.total += book.price;
        },
        removeFromCart(book: Book): void {
            const index = this.items.findIndex(item => item.id === book.id);
            if (index !== -1) {
                this.total -= this.items[index].price;
                this.items.splice(index, 1);
            }
        },
        clearCart(): void {
            this.items = [];
            this.total = 0;
        },
        getCartItems(): Book[] {
            return this.items;
        },
        getCartTotal(): number {
            return this.total;
        },
        getAmountBooks (): number {
            return this.items.length;
        }
    }
});