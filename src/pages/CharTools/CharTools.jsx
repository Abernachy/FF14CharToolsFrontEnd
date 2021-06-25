import React, {useContext} from 'react'
import charContext from '../../context/charContext'
import {BrowserRouter as router, Switch, Route, Link} from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import NavBar from '../../components/charTools/NavBar'


function CharTools() {
  
    
  return (
    <div>
      <p>Character Tools Page</p>
      <NavBar />
    
    
    {
      /* This is the main char Tools page which will have our NavBar for the for the components and everything else

      NavBar will have the router and will render 
      */
    }
    </div>
    
    )
}

export default CharTools
