import { create } from "zustand";
import { getPosts } from "../services/fetchPosts";
import { deletePost } from "../services/deletePost";
import { patchPost } from "../services/patchPost";

export const postStore = create((set, get) => {
  return {
    products: [],

    product: null,

    editStatus: null,

    curForm: {
      title: "",
      body: "",
    },

    setProducts: async () => {
      if (get().products.length) return;
      const products = await getPosts();
      set({
        products,
      });
    },

    addProduct: (post) => {
      let products = [...get().products, post];
      set({
        products,
      });
    },

    deleteProduct: async (id) => {
      await deletePost(id);
      set({
        products: get().products.filter((val) => val.id !== id),
      });
    },
    setEditStatus: (id) => {
      set({
        editStatus: id,
      });
    },
    clearEditStatus: () => {
      set({
        editStatus: null,
      });
    },
    updatedProducts: async (addedData, updateList) => {
      await patchPost(get().editStatus, addedData);
      set({
        products: updateList,
      });
    },
  };
});
