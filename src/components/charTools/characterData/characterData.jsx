import React, {useContext} from 'react'
import charContext from '../../context/charContext'



function characterData(
  const {Character} = useContext(charContext)
) {
  return (
    <div>
      <p>Character Data</p>
    </div>
  )
}

export default characterData
