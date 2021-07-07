import React, {useContext} from 'react'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import charContext from '../../../../context/charContext'



const useStyles = makeStyles({
  root: {
    maxWidth: '20%',
  },
  media: {
    height: 20,
  },
});

const EurekaCard = (Eureka) => {
  const classes = useStyles()
  
  const {Level, ExpLevelTogo,Name} = Eureka
  
  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Eureka Stats
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Level: {Level}
            Exp To Go: {ExpLevelTogo}
            Name: {Name}
            <div>
              
            </div>

          </Typography>
        </CardContent>
    </Card>
  )
}

export default EurekaCard
