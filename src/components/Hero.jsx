import React, { useEffect } from 'react'
import { postStore } from '../store/fetchPost'
import Form from './Form'

export default function Hero() {
  let {products,setProducts,deleteProduct} = postStore()
  useEffect(()=>{
setProducts()
  },[setProducts])

let handleDeletePost = async(id)=>{
 await deleteProduct(id)
}

    return (
    <div className='container'>
<h1 className=' font-[600] text-4xl mb-8'>CRUD Operation</h1>
<Form/>
<div className='grid grid-cols-4 grid-rows-3 gap-8'>
 {
    products.map((val,index)=>{
        return (
<div key={val.id||index} className='my-8 bg-white px-5 py-8'>
<h2 className='font-bold text-lg'>{val.title}</h2>
<p className='font-[300] text-[14px] mb-5 mt-3'>{val.body}</p>
<div>
<button className='btn bg-[#4de000] text-white mr-4'>Edit</button>
<button className='btn bg-[red] text-white' onClick={()=>{handleDeletePost(val.id)}}>Delete</button>
</div>

</div>
        )
    })
 }
</div>
    </div>
  )
}
