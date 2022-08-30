import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import RandomAdvice from './components/RandomAdvice/RandomAdvice'
import diarylogo from './images/diarylogo.png';
import deardiarylogo from './images/deardiarylogo.png';
import heartlogo from './images/heartlogo.png';
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
        <img className={classes.images} src={deardiarylogo} alt="deardiary-logo" height="60" />&nbsp;&nbsp;&nbsp;
        <img className={classes.images} src={heartlogo} alt="heart-logo" height="60" />&nbsp;&nbsp;&nbsp;
        <img className={classes.images} src={diarylogo} alt="diary-logo" height="60" />
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <Typography className={classes.heading} color="secondary" variant="h2" align="center">&nbsp;Dear Diary&nbsp;</Typography>
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <img className={classes.images} src={diarylogo} alt="diary-logo" height="60" />&nbsp;&nbsp;&nbsp;
        <img className={classes.images} src={heartlogo} alt="heart-logo" height="60" />&nbsp;&nbsp;&nbsp;
        <img className={classes.images} src={deardiarylogo} alt="deardiary-logo" height="60" />        
      </AppBar>
      <AppBar className={classes.appBar} position="static" color="inherit" align="center">  
        <RandomAdvice />             
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
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