import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
    constructor(props){
      super(props);
    
      this.state ={apiResponse:""};
    }

    callAPI() {
      fetch("https://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({apiResponse: res}));
    }
    componentwithMount() {
      this.callAPI();
    }
   
render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <p>{this.state.apiResponse}</p>
      <p>Yeiiy!!App Working!</p>
    </div>
  );
}
}


export default App;
