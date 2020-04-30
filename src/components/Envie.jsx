import React, {useState, useEffect} from 'react'
import './Footer.css'
import {Carousel} from 'react-bootstrap'
import './Envie.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button'


const Carouse = () => {

  const [camCategory, setCamCategory] = useState([]);
  const [category , setCategory] = useState('mountain');
  let shuffle1 = Math.floor(Math.random()*50)
  let shuffle2 = Math.floor(Math.random()*50)
  let shuffle3 = Math.floor(Math.random()*50)

  const getData = () =>{
    axios.get(`https://api.windy.com/api/webcams/v2/list/category=${category}/limit=50?show=webcams:location,player&key=UFebPKjuVv8a28DWFr2z9hcQQa2NlDZS`)
    .then(response => setCamCategory(response.data.result.webcams.filter((e,index) => index === shuffle1 || index === shuffle2 || index === shuffle3 )))
}
useEffect (() => {
  getData()
},[category]) 



console.log(category)
console.log(camCategory)
    return (
        <div className="test">
        <Carousel> 
        <Carousel.Item>
          <img
            name ='mountain'
            className="ok"
            src="https://cdn.france-montagnes.com/sites/default/files/styles/header_webzine/public/header/banniere_23.jpg?itok=PfHNBrxl"
            alt="First slide"/>
          <Carousel.Caption>    
          <h3>Partir à la montagne</h3><Button variant="success"onClick ={() => setCategory('mountain') }>Découvrez la selection </Button>
          </Carousel.Caption>
          </Carousel.Item>
          
          
          <Carousel.Item> 
          <img
            className="ok"
            src="https://fr.sx-magazine-wp.sixt.io/magazine/wp-content/uploads/sites/3/2018/06/paradise-697151_1920.jpg"
            alt="Seconde slide"/>
          <Carousel.Caption>
            <h3>Partir à la mer</h3>
            <Button variant="success"onClick ={() =>setCategory('beach')}>Découvrez la selection </Button> 
        </Carousel.Caption>
        </Carousel.Item>
        

       <Carousel.Item> 
       
          <img
            className="ok"
            src="https://i.f1g.fr/media/eidos/805x453_crop/2019/12/10/XVM61ef0d94-1a9d-11ea-9fbb-497aff12b716.jpg"
            alt="Third slide"/>
            <Carousel.Caption> 
         <h3>Partir dans les plus belles villes</h3>
         <Button variant="success" onClick ={() => setCategory('city')}>Découvrez la selection </Button>  
        </Carousel.Caption> </Carousel.Item>  
        </Carousel> 
        
      <>
      {camCategory.map(e =>{ 
          return(
            
           <>  
         <iframe 
          title={e.title}
          width="300"
          height="200"
          src={e.player.lifetime.embed} />
          <h6>{e.title}</h6></>
      
          )})}
      </>
      
      </div>
    )
}

export default Carouse