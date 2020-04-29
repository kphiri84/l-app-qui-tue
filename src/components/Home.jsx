import React, {useContext, useEffect} from 'react'
import { WebCamContext } from '../context/WebCamContext'
import { Shuffle } from 'shuffle'
import './home.css'; 

const Home =()=> {

    const [cam, setCam] = useContext(WebCamContext)
    const [title, setTitle] = useContext(WebCamContext)

useEffect (() => {},[]);
    
return (
<>
<h1>Vers le confinement et au dela </h1>

<p>Parce qu’un confiné n’est pas forcement un imbécile encerclé …
Nous vous proposons de partir ou vous le souhaitez selon vos envie depuis votre canapé ! 
Et parce qu’il fait beau quelque part …. voici nos quelques idées du jour 
</p>

<div className="iframe">
<iframe 
    title={title}
    width="300"
    height="200"
    src={cam}/>
 <iframe
    title={title}
    width="300"
    height="200"
    src={cam}/>
<iframe
   title={title}
    width="300"
    height="200"
    src={cam}/></div>
</>
)
}


export default Home 