import React, { useState } from 'react';
import axios from 'axios';

export const URL='https://jsonplaceholder.typicode.com/posts';
const responseData ={
    loading:false,
    success:false,
    error:null
}

const Fetch = () => {
const [data,setData] =useState<any>(null);
const [response,setResponse]=useState(responseData);
const [post,setPost] =useState('')

const loadData =async() =>{
setResponse({...response,loading:true})
 axios.get(URL).then((res)=>
 {
    setData(res.data)
    setResponse({error:null,loading:false,success:true})
 }
 ).catch((error)=>{
    setResponse({loading:false,success:false,error})
 });
}

const handleSubmit = () => {
setResponse({...response,loading:true})

  axios.post(URL,{
    title: post,
    body: 'bar',
    userId: 1,
  }).then((res)=>{
    data ?setData([...data,res.data]) :setData([res.data])
    setResponse({error:null,loading:false,success:true})

  }).catch((error)=>{
    setResponse({loading:false,success:false,error})
 });

}
console.log(data)

  return (
    <div>
        <button data-testid="load" onClick={()=>loadData()}>Load jokes</button>
        {response.loading && <div data-testid="fetch-loading">Loading...</div>}
      {response.error && <div data-testid="fetch-error">{response.error}</div>}
      {response.success && data && data.map((item:any)=>(<div data-testid="fetch-joke">{item.title}</div>))}
    
    <input type="text" value={post} onChange={(e)=>setPost(e.target.value)} placeholder="Add Post"/>
    <button data-testid="add-post" type="submit" onClick={handleSubmit} >Add</button>
    
    </div>

  )
}

export default Fetch