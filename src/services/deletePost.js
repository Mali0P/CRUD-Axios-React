import axios from "axios"

export const deletePost = async (id)=>{
    let res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.data
}