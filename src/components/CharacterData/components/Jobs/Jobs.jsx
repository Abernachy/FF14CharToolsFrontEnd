import React, {useContext} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import charContext from '../../../../context/charContext'

const Jobs = () => {
  const {Character} = useContext(charContext)
  const {ClassJobs} = Character
  
  const jobsMap = ClassJobs.map(job => {
    return {
      id: job.ClassID,
      Name: job.UnlockedState.Name, 
     Level: parseInt(job.Level),
     } 
  })
  


  //Define the columns
  const columns = [
    // We want to do Name , Level, and % of exp towards level
    
    {field: 'Name', headerName:'Job Name', width: 150},
    {field: 'Level', headerName:'Job Level', width: 300},
  ]

  


  
  return (
    <div>
      <h>Jobs Header</h>
      <div style={{ height:500, width: '25%'}}>
        <DataGrid rows={jobsMap} columns={columns} hideFooter={true}/>
      </div>
    </div>
  )
}

export default Jobs
