import React, { Component } from 'react';
import { Scatter } from 'react-chartjs-2';

class ScatterGraph extends Component{
  constructor(props) {
    super(props);
    this.state = {
      graphData: this.props.graphData
    };
  }

  render(){
    return(
        <div className="graph-size">
          <Scatter
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
                    fontSize: 12
                  }
                }],
                yAxes: [{
                  gridLines: {
                    display: false,
                    color: 'rgba(40, 40, 40, 1)'},
                  ticks: {
                    fontFamily: "Roboto Condensed",
                    fontStyle: "400",
                    fontSize: 12
                  }
                }]
              },
              responsive: true,
              maintainAspectRatio: false,
              title:{
                display: true,
                text:"Scatter Graph",
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

export default ScatterGraph;
 