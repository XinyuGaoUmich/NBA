import React, { Component } from 'react';
import nba from 'nba';
import {Profile} from "./Profile";
import { DataViewContainer } from "./DataViewContainer";
import {SearchBar} from "./SearchBar"


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
                <SearchBar/>
                <div className="player">
                    <Profile playerInfo={this.state.playerInfo}/>
                    <DataViewContainer playerId={this.state.playerId}/>
                </div>
            </div>

        )
    }
}