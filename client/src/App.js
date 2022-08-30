import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import RandomAdvice from './components/RandomAdvice/RandomAdvice'
import diarylogo from './images/diarylogo.png';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit"> 
        <img className={classes.images} src={diarylogo} alt="diary-logo" height="60" />     
        <Typography className={classes.heading} color="secondary" variant="h2" align="center">DearDiary</Typography> 
        <img className={classes.images} src={diarylogo} alt="diary-logo" height="60" />     
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit" align="center">  
        <RandomAdvice />             
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;