import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class BarGraph extends Component{
  constructor(props) {
    super(props);
    this.state = {
      graphData: this.props.graphData
    };
  }
  
  render(){
    const gray = "rgba(40, 40, 40, 1)";
    return(
        <div>
          <Bar
            data={this.state.graphData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                xAxes: [{
                  gridLines: {
                    display: false, 
                    color: gray
                  }, 
                  ticks: {
                    fontFamily: "Roboto Condensed",
                    fontStyle: "400",
                    fontSize: 12
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: false,
                    color: gray},
                  ticks: {
                    fontFamily: "Roboto Condensed",
                    fontStyle: "400",
                    fontSize: 12
                  }
                }]
              },
              title:{
                display: true,
                text:"Bar Graph",
                fontSize: 25,
                fontFamily: "Roboto Condensed",
                fontStyle: "400",
                fontSize: 20
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

export default BarGraph;
 