import React, { Component } from 'react';
import nba from 'nba';
import {Profile} from "./Profile";

export class Main extends Component {
    state = {
        playerId: nba.findPlayer('Stephen Curry').playerId,
        playerInfo: {}
    }
    componentWillMount() {
        nba.stats.playerInfo({PlayerID: this.state.playerId}).then(info => {
            const playerInfo = Object.assign({}, info.commonPlayerInfo[0], info.playerHeadlineStats[0]);
            console.log(playerInfo);
            this.setState({
                playerInfo: playerInfo
            })
        });
    }
    render() {
        return (
            <div className="main">
                <Profile playerInfo={this.state.playerInfo}/>
                <div className="shotchart">ShotChart</div>
            </div>
        )
    }
}