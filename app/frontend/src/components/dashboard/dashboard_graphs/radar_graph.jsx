import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

class RadarGraph extends Component{
  render(){
    const gray = "rgba(40, 40, 40, 1)";
    const white = "rgba(255,255,255,0.9";

    return(
        <div className="graph-size">
          <Radar
            data={this.props.graphData}
            options={{
              scale:{
                gridLines: {
                  display: true,
                  color: gray,
                },
                angleLines: {
                  display: true,
                  color: gray,
                },
                ticks: {
                  backdropColor: "black",
                  fontSize: 10
                },
                pointLabels: {
                  fontSize: 13,
                  fontFamily: "Roboto Condensed",
                  fontStyle: "400",
                }
              },
              responsive: true,
              maintainAspectRatio: false,
              title:{
                display: true,
                text:"Radar Graph",
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
                  fontColor: "gray"
                }
              }
            }}
          />
        </div>
    )
  }
}

export default RadarGraph;
 