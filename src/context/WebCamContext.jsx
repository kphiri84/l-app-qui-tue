import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'

export const MovieContext = createContext()

export const MovieController = (props) => {
    
    const [cam, setCam] = useState([]);
    const [category, setCategory] = useState('beach')

    useEffect (() => {
        axios.get(`https://api.windy.com/api/webcams/v2/list/category=${category}/country=FR/orderby=popularity,desc/limit=20?key=UFebPKjuVv8a28DWFr2z9hcQQa2NlDZS`)
        .then(response => console.log(response))           
    }
      )
    
    return(
        <MovieContext.Provider value={[cam, setCam]}>
            {props.children}
        </MovieContext.Provider>
    )
    
}

