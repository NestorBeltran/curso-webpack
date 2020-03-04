import React, {useState} from 'react';
import data from './data.json'
import Loader from './loader.js';

const App = () =>{
  
  const [loadersList, setLoaderList] = useState([]) 

  const handleClick = (e) =>{
    console.log('value: ', e.target.vlaue);
    setLoaderList(data.loaders)
  }

  const getLoaders = ()=>{
   return <ul>
            {
              loadersList.map((loader)=>{
              return <Loader data={loader} key={loader.id}/>
              })
            }
          </ul>
  }

  return(
    <div>
      {
        loadersList.length > 0 &&
          getLoaders()
      }
      <button onClick={handleClick}>Show Loaders</button>
    </div>
  )
}

export default App;