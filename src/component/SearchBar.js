import React, { Component } from 'react';
import { AutoComplete, Icon, Input } from 'antd';



export class SearchBar extends React.Component {
    state = {
        dataSource: [],
    }

    handleSearch = (value) => {
        this.setState({
            dataSource: !value ? [] : [
                value,
                value + value,
                value + value + value,
            ],
        });
    }

     onSelect = (value) => {
        console.log('onSelect', value);
    }

    render() {
        const { dataSource } = this.state;
        return (
            <AutoComplete
                dataSource={dataSource}
                className = "search-bar"
                onSelect={this.onSelect}
                onSearch={this.handleSearch}
                size="large"
                placeholder="Search NBA Player"
            >
                <Input suffix={<Icon type="search" />} />
            </AutoComplete>
        );
    }
}
