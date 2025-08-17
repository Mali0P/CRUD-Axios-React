import { create } from "zustand";
import { getProducts } from "../services/fetchProductList";
import { deletePost } from "../services/deletePost";


export const postStore = create((set,get)=>{
    return{
       products:[],
       product:null,
       setProducts: async ()=>{
        if(get().products.length){
            return get().products
        }
          const products= await getProducts()
  set({
    products
  })
},

    deleteProduct:async (id)=>{
   await deletePost(id)
   set({
    products:get().products.filter((val)=>val.id!==id)
   })
  }
      }

})