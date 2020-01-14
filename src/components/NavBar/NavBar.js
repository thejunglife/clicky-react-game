import React, { useContext } from 'react'
import GameContext from '../../utils/GameContext'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const NavBar = () => {


  const classes = useStyles();

  const { score, topScore, startGame } = useContext(GameContext)

  return(
    
    <div className={classes.root}>
   <AppBar position="static">
  <Toolbar>
    <Typography variant="h4" className={classes.title}>
       Clicky Game
    </Typography>
    <Typography variant="h4" className={classes.title}>
       {startGame}
    </Typography>
    <Typography variant="h4" className={classes.title}>
       Current Score: {score}
    </Typography>
    <Typography variant="h4" className={classes.title}>
       Top Score: {topScore}
    </Typography>
  </Toolbar>
</AppBar>
</div>
  )



}

export default NavBar