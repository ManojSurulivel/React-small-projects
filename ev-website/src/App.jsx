import React,{useEffect, useState} from 'react'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

const App = () => {

  let heroData = [
    {text1:"Dive Into",text2:"What you Love"},
    {text1:"Indulge",text2:"Your Passions"},
    {text1:"Give in to ",text2:"Your Passions"}
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false)

  useEffect(()=>{
     setInterval(()=>{
         setHeroCount((count)=>{return count===2?0:count+1})
     },3000);
  },[])

  return (
    <div>
         <Background playStatus={playStatus} heroCount={heroCount}/>
         <Navbar />
         <Hero 

          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus} 
          
          />
    </div>
  )
}

export default App
