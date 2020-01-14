import React, { useContext } from 'react'
import GameContext from '../../utils/GameContext'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Cards = () => {

const classes = useStyles();

const { characterArr, handleClick } = useContext(GameContext)

  return (
    <>
       {characterArr.map((char, i) => <Card key={i} onClick={handleClick} className={classes.card}>
       <img id={char.id} src={char.src} alt='click'/>
        </Card>)}
        </>
  )
}

export default Cards