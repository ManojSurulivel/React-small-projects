import React, { useState,useRef } from 'react'
import './ImageGenerator.css'
import default_image from '../assets/default_image.svg'


const ImageGenerator = () => {
    const[image_url,setImage_url] = useState('/');
    let inputRef = useRef(null);
    const[loading,setLoading] =useState(false)

    const imageGenerator = async () =>{
        if (inputRef.current.value===""){
            return 0 ;
        }
        setLoading(true)
        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:
                    "Bearer sk-Z1q1V6oEu5GOkjp4tu2rEpwxDgCzAhX9BCSSckTgibT3BlbkFJ3Cs2T52evu6aik3HkiopvQJMEirMUpWcVCeGHBY_MA",
                    "User_Agent" : "Chrome",
                },
                body:JSON.stringify({
                    prompt:`${inputRef.current.value}`,
                    n:1,
                    size:"512x512",
                }),
            }
        );
        let data = await response.json()
        let data_array = data.data;
        setImage_url(data_array[0].url);
        setLoading(false);

    }
 
  return (
   <div className="ai-image-generator">
    <div className="header">Ai Image<span>Generator</span></div>
    <div className="img-loading">
        <div className="image"><img src={image_url==="/"?default_image:image_url} alt="" /></div>
        <div className="loading">
        <div className={loading?"loading-bar-full":"loading-bar"}></div>       
        <div className={loading?"loading-text":"display-none"}>Loading...</div> 
        </div>
    </div>
    <div className="search-box">
        <input type="text" className="search-input" placeholder='Describe What you what to See' />
        <div className="generator-btn" onClick={()=>{imageGenerator()}}>Generate</div>
    </div>
   </div>
  )
}

export default ImageGenerator
