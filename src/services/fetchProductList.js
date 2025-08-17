import axios from "axios"

export const getProducts = async ()=>{
    try{
   const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data.slice(0,12)
    }
    catch(error){
return error.message
    }
 
}


