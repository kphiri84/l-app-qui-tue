import React from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Search from './components/Search'
import Test from './components/Test'

class Router extends React.Component {
render(){

return (
<>
<NavBar />
<Switch>
<Route exact path = "/" component={Home} />
<Route path= "/Recherche" component={Search} />
<Route path= "/resultat" component={Test} />
</Switch>   
<Footer />
</>
)
}
}

export default Router 