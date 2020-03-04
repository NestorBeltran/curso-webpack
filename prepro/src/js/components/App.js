import React, {useState} from 'react';
import data from './data.json';
import Loader from './loader.js';
import logo from '../../images/platzi.png';
import video from '../../video/que-es-core.mp4'
import '../../sass/sass.scss'
import '../../stylus/stylus.styl'
import '../../less/less.less'


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
      <p className="sass">
        SASS
      </p>
      <p className="less">
        LESS
      </p>
      <p className="stylus">
        STYLUS
      </p>
      <p className="post-css">
        POSTCSS
      </p>
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