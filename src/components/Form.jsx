import React, { useState } from 'react';
import { postPost } from '../services/postPost';
import { postStore } from '../store/fetchPost';

export default function Form() {
  let { products, addProduct } = postStore();

  const [addData, setAddData] = useState({
    title: '',
    body: ''
  });

  const updateData = (e) => {
    const { name, value } = e.target;
    setAddData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const addPostData = async () => {
    try {
     let res = await postPost(addData);
if (res.data) {         
  addProduct(res.data);  
}

    } catch (error) {
      console.error("Failed to post:", error);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addPostData();
    console.log(products)
    setAddData({ title: '', body: '' });
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit} method="POST">
        <input
          type="text"
          name="title"
          className="formInput"
          value={addData.title}
          onChange={updateData}
        />
        <input
          type="text"
          name="body"
          className="formInput"
          value={addData.body}
          onChange={updateData}
        />
        <button className="btn bg-[#0163f8] text-white">Add Post</button>
      </form>
    </div>
  )
}
