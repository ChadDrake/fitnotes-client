import React, { Component } from 'react';

export default class MetricListForm extends Component {
  generateOptions = (optionList) => {
    return optionList.map((option) => {
      return (
        <option key={option.id} value={option.id}>
          {option.metric_name}
        </option>
      );
    });
  };
  render() {
    return (
      <div>
        <label htmlFor="metric">Choose what progress metric to see</label>
        <select onChange={this.props.handleChange} name="metric" id="metric">
          {this.generateOptions(this.props.metrics)}
        </select>
      </div>
    );
  }
}
