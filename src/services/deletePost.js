import axios from "axios"

export const deletePost = async (id)=>{
    try{
        let res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return res.data
    }
    catch(error){
        return error.message
    }
    
}