import React, { useContext } from 'react'
import GameContext from '../../utils/GameContext'
import Cards from '../Cards'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Game = () => {

const classes = useStyles();

return (
  <div>
    <Grid container item xs={12} spacing={3}>
        <Cards />
    </Grid>
  </div>
)

}

export default Game