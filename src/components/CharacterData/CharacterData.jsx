import React, {useContext} from 'react'
import charContext from '../../context/charContext'
import Jobs from './components/Jobs'





function CharacterData() {
  const {Character} = useContext(charContext)
  return (
    <div>
      <h>Character Data</h>
      < Jobs /> 
      <div>
        <img src={Character.Portrait}
             align="center"
             />
      </div>
      <h1>Eureka</h1>
      <h1>Bosjan</h1>
    </div>
  )
}

export default CharacterData
