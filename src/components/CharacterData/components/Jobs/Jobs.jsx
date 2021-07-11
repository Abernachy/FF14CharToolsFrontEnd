import React, {useContext} from 'react'
import {DataGrid} from '@material-ui/data-grid'
import charContext from '../../../../context/charContext'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
  jobTable:{
    width:'100%',
    height: '1000px',
    
  }

}))


const Jobs = () => {
  const {Character} = useContext(charContext)
  const {ClassJobs} = Character
  const classes = useStyles()
  
  const jobsMap = ClassJobs.map(job => {
    return {
      id: job.ClassID,
      Name: job.UnlockedState.Name, 
     Level: parseInt(job.Level),
     } 
  })
  


  //Define the columns
  const columns = [
    // We want to do Name and Level
    
    {field: 'Name', headerName:'Job Name', width: 150},
    {field: 'Level', headerName:'Job Level', width: '50%'},
  ]

  


  
  return (
    <div>
      <Typography 
        align='center'
        gutterBottom
        variant='h2'
        >
          Jobs
        </Typography>
      <div className={classes.jobTable}>
        <DataGrid rows={jobsMap} columns={columns} hideFooter={true}/>
      </div>
    </div>
  )
}

export default Jobs
