import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutGraph extends Component{
  constructor(props) {
    super(props);
    this.state = {
      graphData: this.props.graphData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }
  
  render() {
    const white = "rgba(255,255,255,0.9";

    return(
        <div className="graph-size">
          <Doughnut
            data={this.state.graphData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              title:{
                display: true,
                text:"Doughnut Graph",
                fontSize: 25,
                fontFamily: "Roboto Condensed",
                fontStyle: "400",
                fontSize: 20,
              },
              legend: {
                display: true,
                position:'bottom',
                labels: {
                  fontFamily: "Roboto Condensed",
                  fontStyle: "400",
                  fontSize: 12,
                }
              }
            }}
          />
        </div>
    )
  }
}

export default DoughnutGraph;
 