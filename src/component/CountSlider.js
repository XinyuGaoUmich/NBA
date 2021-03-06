import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export default class CountSlider extends Component {
    state = {
        inputValue: this.props.value,
    }

    onChange = (value) => {
        const cleanValue = Number(value) ? value: this.state.inputValue
        this.setState({
            inputValue: cleanValue,
        });
        this.props.onCountSliderChange(value);
    }


    render() {
        return (
            <Row>
                <Col span={12} offset={4}>
                    <Slider min={2} max={20} onChange={this.onChange} value={this.state.inputValue} />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={2}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        )
    }
}