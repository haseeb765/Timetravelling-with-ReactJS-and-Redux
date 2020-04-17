import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from '@material-ui/core';
import { addToList, RemoveFromList } from "./utils/listUtils"
import ShoppingContainer from "./components/ShoppingContainer"
import { connect } from 'react-redux';
import { simpleAction } from './actions/simpleAction';

const mapStateToProps = (state: any) => ({
  ...state
})

const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: () => dispatch(simpleAction())
})

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

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ShoppingContainer
            items={["Oranges", "Bananas", "Cereal"]}
          />
          <div className="Shopping-list-container">
            <TextField
              id="textField-add"
              variant="outlined"
              label="Add to list"
              placeholder="Milk"
              onKeyUp={(e) => handleKeyPress(e)}
            />
            <TextField
              id="textField-remove"
              variant="outlined"
              label="Remove from list"
              placeholder="Bananas"
              onKeyUp={(e) => handleKeyPress(e)}
            />
          </div>
          <span>
            <button>Undo redux action</button>
            <button>Redo redux action</button>
          </span>
        </header>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);