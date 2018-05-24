import React from 'react';
import { AutoComplete, Icon, Input } from 'antd';
import nba from 'nba';
import {PROFILE_PIC_URL_PREFIX } from "../Constants";

const Option = AutoComplete.Option;


export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] :
               nba.searchPlayers(value).map(({playerId, fullName})=>
                   < Option key={playerId} value={fullName}>
                       <img className="player-option-image" src={`${PROFILE_PIC_URL_PREFIX}${playerId}.png`} alt={`${playerId}`}/>
                       <span className="player-option-label" > {fullName}</span>
                   </Option>
               )

        });
    }


    render() {
        window.nba = nba;
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                className = "search-bar"
                onSelect={this.props.loadPlayerInfo}
                onSearch={this.handleSearch}
                size="large"
                placeholder="Search NBA Player"
                optionLabelProp="value"
            >
                <Input suffix={<Icon type="search" />} />
            </AutoComplete>
        );
    }
}
