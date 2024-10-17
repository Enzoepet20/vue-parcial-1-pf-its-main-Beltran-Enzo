import { defineStore } from "pinia";
import { Producto } from '@/models/ProductModel';

export interface ProductState {
     data:Producto[]
}

export const useProducStore = defineStore ('product',{
    state: () : ProductState => ({
      data: [],
    }),
actions:{

}

})