import React, {useContext} from 'react'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Paper} from '@material-ui/core';



const useStyles = makeStyles({
  root: {
    maxWidth: '20%',
  },
  media: {
    height: 20,
  },
});

const BozjanCard = (Bozjan) => {
  const classes = useStyles()
  const {Level, Mettle, } = Bozjan
  
  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bozjan Stats
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Level: {Level}
            Mettle: {Mettle}
            <div>
              
            </div>

          </Typography>
        </CardContent>
    </Card>
  )
}

export default BozjanCard
