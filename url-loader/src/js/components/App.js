import React, {useState} from 'react';
import data from './data.json';
import Loader from './loader.js';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4'


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
      <p>
        <video src={video} width={360} controls poster={logo}></video>
      </p>
      <p>
        <img src={logo} alt="" width={40}/>
      </p>
      {
        loadersList.length > 0 &&
          getLoaders()
      }
      <button onClick={handleClick}>Show Loaders</button>
    </div>
  )
}

export default App;