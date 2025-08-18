import React from "react";
import { postStore } from "../store/fetchPost";
export default function DeleteForm({ index }) {
  const { deleteProduct } = postStore();
  let handleDeletePost = async (index) => {
    await deleteProduct(index);
  };
  return (
    <button
      className="btn bg-[red] text-white"
      onClick={() => {
        handleDeletePost(index);
      }}
    >
      Delete
    </button>
  );
}
