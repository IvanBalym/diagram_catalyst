import React, { Component } from 'react';
import {HydraulicPump} from './HydraulicPump';

export class SiteDiagram extends Component {
    render() {
        const {rover} = this.props;
        return(
            <div>
                <h3>Rover : {rover.id}</h3>
                {
                    rover.tank &&
                    rover.tank.map((item, index)=>{
                        let alarm;
                        rover.alarm.map((item) => {
                            if(rover.alarm[index].channel_num===item.channel_num) {
                                console.log(item);
                                alarm = item
                            }
                            alarm = null
                        });
                        return (
                            <HydraulicPump
                                key={index}
                                tank={item}
                                alarm={alarm}
                            />
                        )}
                    )
                }
            </div>
        )
    }
}