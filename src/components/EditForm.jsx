import React, { useState } from "react";
import { postStore } from "../store/fetchPost";

export default function EditForm({ curData, index }) {
  const {
    products,
    editStatus,
    setEditStatus,
    clearEditStatus,
    updatedProducts,
  } = postStore();

  const handleStatus = (index) => {
    if (editStatus === index) {
      let addedProduct = products.filter((val) =>
        val.id === editStatus ? curData : ""
      );
      let updateList = products.map((val) =>
        val.id === editStatus ? curData : val
      );

      updatedProducts(addedProduct, updateList);

      clearEditStatus();
    } else {
      setEditStatus(index);
    }
  };

  return (
    <button
      className="btn bg-[#4de000] text-white mr-4"
      onClick={() => {
        handleStatus(index);
      }}
    >
      {editStatus === index ? "Save" : "Update"}
    </button>
  );
}
