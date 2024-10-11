import React, { useState } from 'react'
import Navbar from './Componets/Navbar'
import NewsBoard from './Componets/NewsBoard'

const App = () => {
  const [category,setCategory] = useState("general ")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
