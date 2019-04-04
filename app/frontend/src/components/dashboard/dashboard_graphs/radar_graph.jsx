import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';

class RadarGraph extends Component{
  render(){
    const gray = "rgba(40, 40, 40, 1)";
    // const white = "rgba(255,255,255,0.9";
    const lightgray = 'rgb(196,196,196)';
    return(
        <div className="radar">
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
                  fontSize: 10,
                  fontColor: lightgray
                },
                pointLabels: {
                  fontSize: 13,
                  fontFamily: "Roboto Condensed",
                  fontStyle: "400",
                  fontColor: lightgray
                }
              },
              responsive: true,
              maintainAspectRatio: false,
              title:{
                display: true,
                text:"Concentration of Emotions",
                // fontSize: 25,
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
                  fontColor: "gray",
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

export default RadarGraph;
 