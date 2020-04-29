import React, {useContext, useEffect} from 'react'
import { WebCamContext } from '../context/WebCamContext'
import WebCamController from '../context/WebCamContext'
import './home.css'; 
import ReactDOM from 'react-dom'

const Home =()=> {

    const [cam, setCam] = useContext(WebCamContext)
    const [title, setTitle] = useContext(WebCamContext)

// const shuffle1 = Math.floor(Math.random()*50)
// var shuffle2 = Math.floor(Math.random()*50)
// var shuffle3 = Math.floor(Math.random()*50)

// function ResearchID() {
//     for (let i = 0; i < cam.length; i++) {
//    if (i === shuffle1){
//        setCam(cam[i])
//    }}
// }


// useEffect(()=>{
//     ResearchID()
//     },[])



// console.log(ResearchID())

return (
<>
<h1>Vers le confinement et au dela </h1>

<p>Parce qu’un confiné n’est pas forcement un imbécile encerclé …
Nous vous proposons de partir ou vous le souhaitez selon vos envie depuis votre canapé ! 
Et parce qu’il fait beau quelque part …. voici nos quelques idées du jour 
</p>

<div className="iframe">
{cam.map(e =>{ 
    return(
    <iframe 
    title={e.title}
    width="300"
    height="200"
    src={e.player.lifetime.embed}/>
 )} )
}
 {/* <iframe
    title={title}
    width="300"
    height="200"
    src={cam}/>
<iframe
   title={title}
    width="300"
    height="200"
    src={cam}/></div> */}
</div>
</>
)
}


export default Home 