import { useState,useEffect } from 'react'
import {fetchDataFromApi} from './utils/api'
function App() {
  useEffect(()=>{
    api();
  },[])
const api=()=>{
  fetchDataFromApi('/movie/popular')
  .then((res)=>{
    console.log(res)
  })
}
  return <div className='App'>
    
  </div>
}

export default App
