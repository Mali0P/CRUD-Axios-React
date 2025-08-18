import axios from "axios";

export const patchPost = async (id, post) => {
  try {
    let res = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      post
    );
    return res.data;
  } catch (error) {
    return console.log(error.message);
  }
};
