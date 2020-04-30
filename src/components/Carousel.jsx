import React from 'react'
import './Footer.css'
import {Carousel} from 'react-bootstrap'
import './ccc.css'
class Carouse extends React.Component{
render() {
    return (
        <div className="test">
        <Carousel>
        <Carousel.Item>
          <img
            className="ok"
            src="https://cdn.france-montagnes.com/sites/default/files/styles/header_webzine/public/header/banniere_23.jpg?itok=PfHNBrxl"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="ok"
            src="https://fr.sx-magazine-wp.sixt.io/magazine/wp-content/uploads/sites/3/2018/06/paradise-697151_1920.jpg"
            alt="Seconde slide"
          />
      
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="ok"
            src="https://i.f1g.fr/media/eidos/805x453_crop/2019/12/10/XVM61ef0d94-1a9d-11ea-9fbb-497aff12b716.jpg"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )}
}

export default Carouse