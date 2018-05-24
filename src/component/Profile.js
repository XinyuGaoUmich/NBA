import React, { Component } from 'react'
import { PROFILE_PIC_URL_PREFIX, TEAM_PIC_URL_PREFIX } from "../Constants";

export class Profile extends Component {
    render() {
        const {
           playerId,
            playerName,
            teamCity,
            teamName,
            teamAbbreviation,
            height,
            weight,
            pts,
            reb,
            ast,
            pie
        }= this.props.playerInfo;
        return (
            <div className="profile">
                <div className="player-name">{`${playerName}`}</div>
                <img className="player-pic" src={`${PROFILE_PIC_URL_PREFIX}${playerId}.png`} alt={`${playerName}`}/>
                <div className="profile-entry">
                    <div className="profile-entry-left">Team</div>
                    <div className="profile-entry-right">{`${teamCity} ${teamName}`}</div>
                </div>
                <img className="team-pic" src={`${TEAM_PIC_URL_PREFIX}${teamAbbreviation}_logo.svg`} alt={`${playerName}`}/>
                <div className="profile-entry">
                    <div className="profile-entry-left">Height</div>
                    <div className="profile-entry-right">{`${height}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">Weight</div>
                    <div className="profile-entry-right">{`${weight}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PTS</div>
                    <div className="profile-entry-right">{`${pts}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">REB</div>
                    <div className="profile-entry-right">{`${reb}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">AST</div>
                    <div className="profile-entry-right">{`${ast}`}</div>
                </div>
                <div className="profile-entry">
                    <div className="profile-entry-left">PIE</div>
                    <div className="profile-entry-right">{`${pie}`}</div>
                </div>
            </div>
        )
    }
}