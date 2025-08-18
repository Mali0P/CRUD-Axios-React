import { create } from "zustand";
import { getPosts } from "../services/fetchPosts";
import { deletePost } from "../services/deletePost";


export const postStore = create((set,get)=>{
    return{
       products:[],
       product:null,
       setProducts: async ()=>{
        if(get().products.length) return;
          const products= await getPosts()
  set({
    products
  })
},

    deleteProduct:async (id)=>{
   await deletePost(id)
   set({
    products:get().products.filter((val)=>val.id!==id)
   })
  },
  addProduct:(post)=>{
let products = [...get().products,post]
set({
  products
})
  }

      }

})