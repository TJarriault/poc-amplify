import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import { API } from 'aws-amplify';

class App extends Component {
  constructor(props){
    super(props);

    let apiName = 'poctony';
    let path = '/items';
    let myInit = { // OPTIONAL
      //response: true // OPTIONAL (return the entire Axios response object instead of only response.data)
    }
    API.get(apiName, path, myInit).then(response => {
      // Add your code here
      console.log('response',  response);
    }).catch(error => {
      console.log(error.response)
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
