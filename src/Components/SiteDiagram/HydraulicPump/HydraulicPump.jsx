import React, { Component } from 'react';

export class HydraulicPump extends Component {
    render() {
        const {high_trigger_pc, channel_num, tank_level, flow_rate, auto , low_trigger_pc} = this.props.tank;
        return(
            <div className={'hydraulic-pump alarm'+this.props.alarm.code} >
                <p>{high_trigger_pc}</p>
                <p>{channel_num}</p>
                <p>{tank_level}</p>
                <p>{flow_rate}</p>

                <p>{auto}</p>
                <p>{low_trigger_pc}</p>
            </div>
        )
    }
}