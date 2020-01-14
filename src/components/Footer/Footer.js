import React  from 'react'
// import GameContext from '../../utils/GameContext'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Footer = () => {

 const classes = useStyles();

  return (
    <>
      <BottomNavigation className={classes.root}>
    </BottomNavigation>
    </>
  )

}

export default Footer