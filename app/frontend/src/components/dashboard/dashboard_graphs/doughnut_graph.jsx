import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

class DoughnutGraph extends Component{
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  }
  
  render() {
    // const white = "rgba(255,255,255,0.9";

    return(
        <div className="graph-size">
          <Doughnut
            data={this.props.graphData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              title:{
                display: true,
                text:"Doughnut Graph",
                // fontSize: 50,
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
 