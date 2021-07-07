import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import charContext from '../../context/charContext'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 20,
  },
});


 const NameCard = () => {
   const classes = useStyles()



  // Show the Name ,FreeCompanyName, server, DC, and Avatar
   const {Character} = useContext(charContext)
  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {Character.Name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Free Company: {Character.FreeCompanyName}
            Server: {Character.Server}
            DC: {Character.DC}
            <div>
              <img src={Character.Avatar}
              align="Right"
              />
            </div>

          </Typography>
        </CardContent>
    </Card>
  )
}

export default NameCard
