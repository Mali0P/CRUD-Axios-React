import axios from "axios"

export const postPost = async (post)=>{
    try{
  const res = await axios.post('https://jsonplaceholder.typicode.com/posts',post)      
  return res
}
    catch(error){
        return error.message
    }

}