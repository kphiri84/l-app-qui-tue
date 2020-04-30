import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Envie from './components/Envie'

class Router extends React.Component {
render(){

return (
<>
<NavBar />
<Switch>
<Route exact path = "/" component={Home} />
<Route path= "/Envie" component={Envie} />
</Switch>   
<Footer />
</>
)
}
}

export default Router 