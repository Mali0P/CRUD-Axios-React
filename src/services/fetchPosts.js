import axios from "axios"

export const getPosts = async ()=>{
    try{
   const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
    }
    catch(error){
return error.message
    }
 
}


