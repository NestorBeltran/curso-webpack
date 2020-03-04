import React, {useState} from 'react';
import data from './data.json'

console.log('data', data)

const App = () =>{
  const [loadersList, setLoaderList] = useState([]) 
  return(
    <div>
      <ul>
        {
          loadersList.map((loader)=>{
          return <li key={loader.id}> <p>{loader.name}</p> </li>
          })
        }
      </ul>
    </div>
  )
}

export default App;