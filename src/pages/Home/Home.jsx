import React, {useReducer, useState} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import initialState from '../../reducer/initialState'
import Query from '../Query'
import CharTools from '../CharTools'
import charContext from '../../context/charContext'



function Home() {

  const [charState,setChar] = useState(initialState)

  return (
    <div>

      <Router>
        {charState.characterLoaded ? 
          <Switch>
            <charContext.Provider value={charState}>
            <Route path="/character" component={CharTools}/>
            <Redirect to="/character" />
            </charContext.Provider>
          </Switch>
            :
          <Switch>
            <Route path="/query" component={Query} />
            <Redirect to="/query" />
          </Switch>  

        }

          
          
      </Router>
      {/*
      So this is the home page component that will go to the character page or character search/query page.  
      That direction will be based on if state.characterLoaded == true
      */}
    </div>
  )
}

export default Home
