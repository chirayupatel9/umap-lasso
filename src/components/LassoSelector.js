import React, { Component } from 'react';
import ReactLassoSelect from 'react-lasso-select';

class LassoSelector extends Component {
  handleComplete = (selectedPoints) => {
    // Convert the selected points to your dataset's format
    const selectedData = selectedPoints.map(point => this.props.data[point.index]);
    this.props.onSelectionComplete(selectedData);
  };

  render() {
    return (
      <ReactLassoSelect
        value={this.props.points}
        onComplete={this.handleComplete}
        src={this.props.src}
      />
    );
  }
}

export default LassoSelector;
