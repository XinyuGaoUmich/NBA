import React, { Component } from 'react';
import {ShotChart} from "./ShotChart";
import CountSlider from "./CountSlider";
import _ from 'lodash';
import { Radio, Switch, Icon } from 'antd';


const RadioGroup = Radio.Group;

export class DataViewContainer extends Component {
    state = {
        chartType: "hexbin",
        displayToolTip: true,
        minCount: 2,
    }

    onChartTypeChange = (e) => {
        this.setState({
            chartType: e.target.value
        });
    }

    onTooltipChange = (value) => {
        this.setState({
            displayToolTip: value
        });
    }

    onCountSliderChange = (value) => {
        this.setState({
            minCount: value
        });
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart playerId={this.props.playerId}
                           minCount={this.state.minCount} displayToolTip={this.state.displayToolTip} chartType={this.state.chartType}
                />

                {
                    this.state.chartType === "hexbin" ? <CountSlider value={this.state.minCount}
                        onCountSliderChange={_.debounce(this.onCountSliderChange, 300)}/> : null
                }


                <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                    <Radio value="hexbin">Hexbin</Radio>
                    <Radio value="scatter">Scatter</Radio>
                </RadioGroup>

                <Switch onChange={this.onTooltipChange}
                    checkedChildren="On"
                    unCheckedChildren="Off"
                    defaultChecked />
            </div>
        );
    }
}