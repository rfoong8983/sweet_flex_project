import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';

class ScatterGraph extends Component{
  render(){
    const gray = "rgba(40, 40, 40, 1)";
    const white = "rgba(255,255,255,0.9";

    return(
      <div className="graph-size">
          <Scatter
            data={this.props.graphData}
            options={{
              scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }],
              }
            }} />
      </div>
    );
  }
}

export default ScatterGraph;

