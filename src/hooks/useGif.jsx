import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
export const useGif = (tag) => {
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false)
    async function ApiHandle(tag){
      try{
        setLoading(true)
        console.log("here is tag",tag);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
         const data = await axios.get(tag?`${url}&tag=${tag}`:url)
         const imageSource =data.data.data.images.downsized_large.url
         setGif(imageSource)
         setLoading(false)
      }catch(error){
          console.log("THis is error",error)
      }  
    } 
      useEffect(()=>{
        ApiHandle(tag)
      },[])
    return{gif,loading,ApiHandle}
   
}
