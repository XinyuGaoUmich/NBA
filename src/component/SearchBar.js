import React, { Component } from 'react';
import { AutoComplete, Icon, Input } from 'antd';
import nba from 'nba';

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
                       <img className="player-option-image" src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerId}.png`} />
                       <span className="player-option-label" > {fullName}</span>
                   </Option>
               )

        });
    }

     onSelect = (value) => {
        console.log('onSelect', value);
    }

    render() {
        window.nba = nba;
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                className = "search-bar"
                onSelect={this.onSelect}
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
