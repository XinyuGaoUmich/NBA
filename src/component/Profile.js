import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <div className="player-name">Stephen Curry</div>
                <img className="player-pic" src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/201939.png" />
                <div className="profile-entry">
                    <div className="profile-entry-left">Team</div>
                    <div className="profile-entry-right">golden State Warriors</div>
                </div>
                <img className="team-pic" src="https://stats.nba.com/media/img/teams/logos/season/2017-18/GSW_logo.svg" />
            </div>
        )
    }
}