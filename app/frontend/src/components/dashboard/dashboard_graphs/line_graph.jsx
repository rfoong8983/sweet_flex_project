import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class LineGraph extends Component{
  constructor(props) {
    super(props);
    this.state = {
      graphData: this.props.graphData
    };
  }

  render(){
    const lightgray = 'rgb(196,196,196)';
    return(
        <div className="graph-size">
          <Line
            data={this.state.graphData}
            options={{
              scales:{
                xAxes: [{
                  gridLines: {
                    display: false, 
                    color: 'rgba(40, 40, 40, 1)'
                  }, 
                  ticks: {
                    fontFamily: "Roboto Condensed",
                    fontStyle: "400",
                    fontSize: 12,
                    fontColor: lightgray
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: false,
                    color: 'rgba(40, 40, 40, 1)'},
                  ticks: {
                    fontFamily: "Roboto Condensed",
                    fontStyle: "400",
                    fontSize: 12,
                    fontColor: lightgray
                  }
                }]
              },
              responsive: true,
              maintainAspectRatio: false,
              title:{
                display: true,
                text:"Line Graph",
                // fontSize: 25,
                fontFamily: "Roboto Condensed",
                fontStyle: "400",
                fontSize: 20,
                fontColor: lightgray
              },
              legend: {
                display: false,
                position:'bottom'
              }
            }}
          />
        </div>
    )
  }
}

export default LineGraph;
 