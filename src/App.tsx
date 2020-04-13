import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    margin: "0px 10px 10px 0px"
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="Shopping-list-container">
          <TextField
          classes={{
            root: classes.root
          }}
            id="standard-basic"
            variant="outlined"
            label="Add to list"
            placeholder="Milk"
          />
          <TextField
            id="standard-basic"
            variant="outlined"
            label="Remove from list"
            placeholder="Bananas"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
