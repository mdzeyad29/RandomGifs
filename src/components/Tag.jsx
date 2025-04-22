import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

export const Tag = () => {
  const [tag,setTag] = useState('')
 const {gif,loading,ApiHandle} = useGif(tag)
   console.log("tag gif",gif)
  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
    <h1 className='mt-[15px] text-2xl underline uppercase font-bold'> Random {tag} Gif</h1>

    {
      loading?(<Spinner/>):( <img src={gif} width="450"/>)
    }
    <input  className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
    value={tag} 
    onChange={(event)=>{setTag(event.target.value)}}/>
    <button onClick={()=>{ApiHandle(tag)}} className="w-10/12 bg-blue-500 text-lg py-2 rounded-lg mb-[20px]  font-semibold">Generate</button>
    </div>
  )
}

