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
    const lightgray = 'rgb(196,196,196)';

    return(
        <div className="donut">
          <Doughnut
            data={this.props.graphData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              title:{
                display: true,
                text:"Breakdown of Emotions",
                // fontSize: 50,
                fontFamily: "Roboto Condensed",
                fontStyle: "400",
                fontSize: 20,
                fontColor: lightgray
              },
              legend: {
                display: true,
                position:'bottom',
                labels: {
                  fontFamily: "Roboto Condensed",
                  fontStyle: "400",
                  fontSize: 12,
                  boxWidth: 12,
                  fontColor: lightgray
                }
              }
            }}
          />
        </div>
    )
  }
}

export default DoughnutGraph;
 