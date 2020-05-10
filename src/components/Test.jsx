import React, {useState, useEffect} from 'react'
import './Footer.css'
import {Carousel} from 'react-bootstrap'
import './Envie.css'
import axios from 'axios'
import {useParams} from 'react-router-dom'


const Test = () => {
  const [camCategory, setCamCategory] = useState([]);
  const [category , setCategory] = useState('mountain');
  let shuffle1 = Math.floor(Math.random()*50)
  let shuffle2 = Math.floor(Math.random()*50)
  let shuffle3 = Math.floor(Math.random()*50)

  const getData = () =>{
    axios.get(`https://api.windy.com/api/webcams/v2/list/category=${categoryName}/limit=50?show=webcams:location,player&key=UFebPKjuVv8a28DWFr2z9hcQQa2NlDZS`)
    .then(response => setCamCategory(response.data.result.webcams.filter((e,index) => index === shuffle1 || index === shuffle2 || index === shuffle3 )))
  }

  useEffect (() => {
    getData()
  },[category]) 
  
  let {categoryName} = useParams()
   
  function titre(){
    if(categoryName === 'mountain'){
      return 'Montagne'
    }
    else if(categoryName === 'beach'){
      return 'Mers'
    }
    else{
      return 'Villes'
    }
  }

  function lieu(){
    if(categoryName === 'mountain'){
      return 'mountain'
    }
    else if(categoryName === 'beach'){
      return 'beach'
    }
    else{
      return 'city'
    }
  }

  return(
      
    <>
     <h2>{titre()}</h2>
    {camCategory.map(e =>{ 
      return( 
          <div className="Iframe">  
          <iframe 
            title={e.title}
            width="500"
            height="300"
            src={e.player.lifetime.embed} />
            <h4>{e.title}</h4>
        </div>
      )
    })}
    </>
  )
}
export default Test