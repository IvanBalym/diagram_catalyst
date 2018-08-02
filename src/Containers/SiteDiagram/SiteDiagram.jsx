import React, { Component } from 'react';
import { SiteDiagram } from '../../Components/SiteDiagram';

export class SiteDiagramContainer extends Component {
    render() {
        return(
            <div>
                <SiteDiagram rover={this.props.rover}/>
            </div>
        )
    }
}