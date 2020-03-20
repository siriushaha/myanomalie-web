import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { resetFeatures } from '../store/actions';

import { AppBar, Toolbar, Typography, Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const Layout = memo((props) => {
  const dispatch = useDispatch();
  const handleNewDress = () => {
    dispatch(resetFeatures());
  };

  return (
      <Paper
          elevation={0}
          style={{padding: 0, margin: 10, backgroundColor: '#fafafa'}}
      >
        <AppBar color="primary" position="static" style={{height: 64}}>
          <Toolbar style={{height: 64}}>
            <Typography color="inherit" style={{flexGrow: 1}}>DRESS ANOMALIE</Typography>
            <Button color='inherit' onClick={handleNewDress}>New Dress</Button>
          </Toolbar>
        </AppBar>
        <br/>
        {props.children}
      </Paper>
  );
  }
);

export default Layout;