import React, { Component } from 'react';
import {HydraulicPump} from './HydraulicPump';
import {HydraulicPumpMenu} from '../Menus/HydraulicPump';

export class SiteDiagram extends Component {

    _onMouseMove(e) {
        console.log(e.screenX, e.screenY);
    }

    render() {
        const {rover} = this.props;
        return(
            <div onMouseMove={this._onMouseMove.bind(this)}>
                <h3>Rover : {rover.id}</h3>
                <HydraulicPumpMenu positionX={}/>
                {
                    rover.tank &&
                    rover.tank.map((item, index)=>{
                        let alarm=null;
                        rover.alarm.map((item) => {
                            if(rover.alarm[index].channel_num===item.channel_num) {
                                console.log(item);
                                alarm = item;
                            }
                        });
                        return (
                            <div className='rover-item'>
                                {/*<div>{item.equipment_type}</div>*/}
                                <HydraulicPump
                                    key={index}
                                    tank={item}
                                    alarm={alarm}
                                />
                            </div>
                        )}
                    )
                }
            </div>
        )
    }
}