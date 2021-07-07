import React, {useContext} from 'react'
import charContext from '../../context/charContext'
import Jobs from './components/Jobs'
import BozjanCard from './components/Bosjan/Bozjan'
import EurekaCard from './components/Eureka'
import {makeStyles} from '@material-ui/core/styles'
import { Paper, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns:10,
    gridTemplateRows:6



  },
  jobs:{
    gridColumn:0/2,
    gridRow:0/6

  },
  relicJobs:{

  }

}))



function CharacterData() {
  const {Character} = useContext(charContext)
  const {Portrait,ClassJobsBozjan,ClassJobsElemental} = Character
  const classes = useStyles()

  return (
    < Paper elevation ={2} >
      <Typography
        align='center'
        gutterBottom
        variant="h2" 
        >
          Character Details
      </Typography >

    <div>
      <div>
        <img src={Portrait}
             align="center"
             />
      </div>
      <div >
      < Jobs />
      </div>
      <div>
      < BozjanCard {...ClassJobsBozjan}/>
      < EurekaCard {...ClassJobsElemental}/>
    </div>
        </div> 
    </Paper>
  )
}

export default CharacterData
