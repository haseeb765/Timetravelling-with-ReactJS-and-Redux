import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addToList, RemoveFromList } from "./utils/listUtils"

const useStyles = makeStyles({
  root: {
    margin: "0px 10px 10px 0px"
  }
});

const handleKeyPress = (e: React.KeyboardEvent): void => {
  if (!!e.keyCode && e.keyCode === 13) {
    const eventTarget = e.target as HTMLTextAreaElement;
    const eventId = eventTarget.id;

    if (eventId === "textField-add") {
      addToList(eventTarget.value);
    } else if (eventId === "textField-remove") {
      RemoveFromList(eventTarget.value);
    }
  }
}

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
            id="textField-add"
            variant="outlined"
            label="Add to list"
            placeholder="Milk"
            onKeyUp={(e) => handleKeyPress(e)}
          />
          <TextField
            classes={{
              root: classes.root
            }}
            id="textField-remove"
            variant="outlined"
            label="Remove from list"
            placeholder="Bananas"
            onKeyUp={(e) => handleKeyPress(e)}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
