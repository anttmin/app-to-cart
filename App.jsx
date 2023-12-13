

import {useEffect} from 'react'

const App = () => {
 useEffect(()=>{
  fetchData()
 },[])

 const fetchData = async () =>{
  const reponse = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await reponse.json();
  console.log(data)
 }

  return (
   <>
   <h1>Helo</h1>
   </>
  )
}

export default App


  


