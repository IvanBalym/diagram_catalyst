import React, { Component } from 'react';
import './App.css';
import SiteDiagramContainer from './Containers/SiteDiagram/SiteDiagram';
import './Containers/Menus';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div> Hello world </div>
          <SiteDiagramContainer />
      </div>
    );
  }
}

export default App;
