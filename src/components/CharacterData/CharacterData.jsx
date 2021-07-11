import React, {useContext} from 'react'
import charContext from '../../context/charContext'
import Jobs from './components/Jobs'
import BozjanCard from './components/Bosjan/Bozjan'
import EurekaCard from './components/Eureka'
import {makeStyles} from '@material-ui/core/styles'
import { Paper, Typography} from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root  : {
    display: 'grid',
    gridTemplateColumns: 'repeat (6 )',
    girdTemplateRows: 'repeat(8   )'
    
    
  },
  jobs:{
    width: '100%',
    backgroundColor: '#42f5dd',
    width:'100%',
    gridColumn: '1/2',
    gridRow: '1/8'
    

  },
  portrait: {
    gridColumn: '3/4',
    gridRow: '1/8'

  },
  relicJobs:{
    width: '100%',
    gridColumn: '5/6',
    gridRow:'1/8'

  }

}))



function CharacterData() {
  const {Character} = useContext(charContext)
  const {Portrait,ClassJobsBozjan,ClassJobsElemental} = Character
  const classes = useStyles()

  return (
    < Paper elevation ={2}  >
      <Typography
        align='center'
        gutterBottom
        variant="h2" 
        >
          Character Details
      </Typography >

      <div  className={classes.root}>
        <div className={classes.jobs} >
          < Jobs />
        </div>
        <div className={classes.portrait}>
          <img src={Portrait}
              align="center"
              alt='Character Picture'
              />
        </div>
        
        <div className={classes.relicJobs}>
          < BozjanCard {...ClassJobsBozjan}/>
          < EurekaCard {...ClassJobsElemental}/>
        </div>
      </div> 
    </Paper>
  )
}

export default CharacterData
