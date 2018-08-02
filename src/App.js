import React, { Component } from 'react';
import './App.css';
import { SiteDiagramContainer } from './Containers/SiteDiagram';
import * as sampleData from './constants/sample-data';

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: sampleData,
            rover: 0
        }

        this.handleSelectChange = this.handleSelectChange.bind(this);
    }

    handleSelectChange (e) {
        this.setState({
            rover: +e.target.value
        })
    }

    render() {
        const  { data, rover } = this.state;
        console.log(rover, data.site.rover[rover]);
        return (
            <div className="App">
                <select onChange={this.handleSelectChange}>
                    {
                        data &&
                        data.site.rover.map((rover, index)=>(
                            <option key={index} value={index}>{rover.name}</option>
                        ))
                    }
                </select>
                <SiteDiagramContainer
                    rover = {data.site.rover[rover]}
                />
            </div>
        );
    }
}

export default App;
