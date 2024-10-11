import React,{useEffect, useState} from 'react'

const signalProject = () => {
    const [currentLight,setCurrentLight]  = useState('green')
    
    useEffect(()=>{
      let timer;
      if(currentLight === 'green'){
        timer = setTimeout(()=> setCurrentLight('yellow'), 3000);
      }else if(currentLight ==='yellow'){
        timer = setTimeout(()=>setCurrentLight('red'),2000);
      }else if(currentLight === 'red'){
        timer = setTimeout(()=> setCurrentLight('green'),2000);
      }
     return () => clearTimeout(timer)
    },[currentLight]);

  return (
    <div>
        <h1>Traffic Signal</h1>
    <div
        style={{
          textAlign:'center',
          margin:'20px',
          border:'5px solid black',
          borderRadius: '5%',
          width:'150px',
          margin: '150px'
        }}
        >
                    <h1>Traffic Signal</h1>

          <div
          style={{
            width: '100px',
            height:'100px',
            backgroundColor: currentLight === 'green' ? 'green' : '',
            margin: ' 10px auto',
            borderRadius: '50%',
          }}
          />
            <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: currentLight === 'yellow' ? 'yellow' : '',
              margin: '10px auto',
              borderRadius: '50%',
            }}
            />
                 <div
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: currentLight === 'red' ? 'red' : '',
              margin: '10px auto',
              borderRadius: '50%',
            }}
            />

           </div>

    </div>
    
    
  )
}

export default signalProject
