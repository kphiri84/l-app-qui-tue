import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const WebCamContext = createContext()

export const WebCamController = (props) => {
    
    const [cam, setCam] = useState([]);
    const [country, setCountry]= useState('FR')
    

    useEffect (() => {
        axios.get(`https://api.windy.com/api/webcams/v2/list?key=UFebPKjuVv8a28DWFr2z9hcQQa2NlDZS`)
        .then(response => setCam(response.data.result.webcams))
    },[]
      )
    console.log(cam)
    return(
        <WebCamContext.Provider value={[cam, setCam]}>
            {props.children}
        </WebCamContext.Provider>
    )
    
}

