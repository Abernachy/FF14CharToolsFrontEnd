import React, {useContext} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import charContext from '../../../../context/charContext'

const Jobs = () => {



  const {Character} = useContext(charContext)
  const jobs = Character.ClassJobs
  
  //Define the columns
  const columns = {
    
  }
  
  return (
    <div>
      <h>{jobs[1].Name}</h>
    </div>
  )
}

export default Jobs
