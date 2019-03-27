import React, { Component } from 'react';
import { connect } from 'react-redux';
import LineGraph from './dashboard_graphs/line_graph';
import RadarGraph from './dashboard_graphs/radar_graph';
import DoughnutGraph from './dashboard_graphs/doughnut_graph';
import BarGraph from './dashboard_graphs/bar_graph';
import ScatterGraph from './dashboard_graphs/scatter_graph';
import { watchFile } from 'fs';
import TweetList from './tweet_list';
// import '../../css/dashboard.css';

class DashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      barGraphData: {},
      lineGraphData: {},
      radarGraphData: {},
      doughnutGraphData: {},
      scatterGraphData: {}
    };
  }

  componentWillMount() {
    this.getGraphData();
  }

  
  componentDidUpdate(){
    // debugger;
  }
  componentWillReceiveProps(){
    // debugger;
  }
        
  getSentenceTones() {
    const sentenceTonesHash = {};
    let sentenceTones = this.props.watsonSentenceTones;
    for (let i = 0; i < sentenceTones.length; i++) {
      let tones = sentenceTones[i].tones;
      for (let j = 0; j < tones.length; j++) {
        let tone = tones[j];
        if (sentenceTonesHash[tone.tone_name]) {
          sentenceTonesHash[tone.tone_name] += tone.score;
        } else {
          sentenceTonesHash[tone.tone_name] = tone.score;
        }
      }
    }
    return sentenceTonesHash;
  }

  componentDidUpdate(oldProps) {
    if (oldProps.watsonSentenceTones !== this.props.watsonSentenceTones) {
      const purple = 'rgba(118, 60, 234, 1)';
      const purpleLowOpac = 'rgba(118, 0, 234, .5)';
      const purpleBorder = 'rgba(118, 0, 234, 1)';
      const blue = 'rgba(53, 0, 212, 1)';
      const blueLowOpac = 'rgba(53, 0, 212, .5)';
      const blueBorder = 'rgba(53, 0, 212, 1)';
      const none = 'rgba(0, 0, 0, 0)';
      
      const [tones, toneData] = this.getRadarGraphData(this.getSentenceTones());

      this.setState({
        radarGraphData: {
          labels: tones,
          datasets: [
            {
              label: 'hashtag 1', // hashtag searched
              data: toneData,
              borderColor: blue,
              lineTension: 0,
              borderWidth: 2,
              backgroundColor: blueLowOpac,
              pointBackgroundColor: "black",
              pointBorderColor: blueBorder,
              pointBorderWidth: 2,
              pointRadius: 3
            }
          ]
        }, 
        doughnutGraphData: {
          labels: tones,
          datasets: [
            {
              data: toneData,
              hoverBorderColor: [
                blueBorder,
                purpleLowOpac, 
                blue
              ],
              backgroundColor: [
                blueLowOpac,
                purpleLowOpac,
                blue,
              ],
              hoverBorderWidth: 2,
              borderWidth: 0,
            }
          ]
        }
      });
    }
  }

  getRadarGraphData(sentenceTones) {
    let tones = Object.keys(sentenceTones);
    let toneData = [];
    for (let i = 0; i < tones.length; i++) {
      toneData.push(sentenceTones[tones[i]]);
    }
    return [tones, toneData];
  }

  getGraphData() {
    const purple = 'rgba(118, 60, 234, 1)';
    const purpleLowOpac = 'rgba(118, 0, 234, .5)';
    const purpleBorder = 'rgba(118, 0, 234, 1)';
    const blue = 'rgba(53, 0, 212, 1)';
    const blueLowOpac = 'rgba(53, 0, 212, .5)';
    const blueBorder = 'rgba(53, 0, 212, 1)';
    const none = 'rgba(0, 0, 0, 0)';

    const barCount = (length, color) => {
      let res = [];
      for (let i = 0; i < length; i++) {
        res.push(color);
      }
      return res;
    };

    this.setState({

      scatterGraphData: {
        datasets: [
          {
            label: 'Joy',
            data: [
              {x: 20, y: 20},
              {x: 20, y: 20},
              {x: 30, y: 30},
              {x: 40, y: 40},
              {x: 40, y: 45},
              {x: 50, y: 50},
              {x: 75, y: 0}
            ],
            backgroundColor: blue,
            showLine: true,
            fill: false,
            borderColor: blue,
            borderWidth: 2
          },
          {
            label: 'Sadness',
            data: [
              {x: 55, y: 20},
              {x: 72, y: 63},
              {x: 89, y: 23},
              {x: 21, y: 15},
              {x: 54, y: 11},
              {x: 32, y: 45},
              {x: 8, y: 0}
            ],
            backgroundColor: purple,
            showLine: true,
            fill:false,
            borderColor: purple,
            borderWidth: 2
          }
        ],

      },
      // bar graph (avg sentiment over 100 tweets for specific hashtag)
      barGraphData: {
        labels: ['Boston', "San Francisco", "Los Angeles", "New York"], // x-axis
        datasets: [
          {
            label: 'Population', // bar name
            data: [100, 200, 300, 400], // y-axis
            backgroundColor: barCount(4, blue), // this.props.data.length
            borderColor: barCount(4, blueBorder),
          },
          {
            label: "Hype",
            data: [200, 300, 120, 60],
            backgroundColor: barCount(4, purple),
            borderColor: barCount(4, purpleBorder),
          }
        ]
      },
      //line graph (sentiment over time for specific hashtag)
      lineGraphData: {
        labels: ['mon','tues','weds','thurs','fri','sat','sun'], // x-axis (time data)
        datasets: [
          {
            label: 'Joy',  // (sentiment category)
            data: [70, 35, 45, 80, 89, 92, 75], // y-axis (sentiment value)
            lineTension: 0,
            borderWidth: 2,
            backgroundColor: none,
            pointBackgroundColor: "black",
            borderColor: blue,
            pointBorderColor: blue
          },
          {
            label: "Sadness", // (sentiment category)
            data: [20, 60, 62, 45, 32, 80, 44], // y-axis (sentiment value)
            lineTension: 0,
            borderWidth: 2,
            backgroundColor: none,
            pointBackgroundColor: "black",
            borderColor: purple,
            pointBorderColor: purple
          }
        ]
      },

      //radar graph (response to hashtag by sentiment category)
      radarGraphData: {
        labels: ['sad','happy','angst','envy','pride','love','anger',"joy", "shock"], // (sentiment category)
        datasets: [
          {
            label: 'hashtag 1', // hashtag searched
            data: [19, 73, 72, 54, 32, 35, 80], // (sentiment value)
            borderColor: blue,
            lineTension: 0,
            borderWidth: 2,
            backgroundColor: blueLowOpac,
            pointBackgroundColor: "black",
            pointBorderColor: blueBorder,
            pointBorderWidth: 2,
            pointRadius: 3
          },
          {
            label: "hashtag 2",
            data: [35, 19, 32, 75, 32, 62, 15],
            borderColor: purple,
            lineTension: 0,
            borderWidth: 2,
            backgroundColor: purpleLowOpac,
            pointBackgroundColor: "black",
            pointBorderColor: purpleBorder,
            pointBorderWidth: 2,
            pointRadius: 3
          }
        ]
      },

      //doughnut graph (distribution of sentiment over 100 tweets)
      doughnutGraphData: {
        labels: ['sad','happy','angst'], // sentiment categories
        datasets: [
          {
            data: [19, 73, 72], // (sentiment count by category)
            hoverBorderColor: [
              blueBorder,
              purpleLowOpac, 
              blue
            ],
            backgroundColor: [
              blueLowOpac,
              purpleLowOpac,
              blue,
            ],
            hoverBorderWidth: 2,
            borderWidth: 0,
          }
        ]
      },
    });
  }

  render() {
    //replace later with data passed in through container
    return (
      <div>
        <div className="dashboard-container">
          <div className="dashboard">
            <div className="flex-col-center">
              <div className="dashboard-text">#Hashtag Analysis</div>
              <ScatterGraph graphData={this.state.scatterGraphData} />
              <BarGraph graphData={this.state.barGraphData} />  
              <LineGraph graphData={this.state.lineGraphData} />
              <RadarGraph graphData={this.state.radarGraphData} />
              <DoughnutGraph graphData={this.state.doughnutGraphData} />
              <TweetList tweets={this.props.allTweets} />
            </div>
          </div>
        </div>

      </div>
    )
  }

}


const msp = state => ({
  allTweets: state.entities.tweets.allTweets, 
  watsonDocTones: state.entities.watson.documentTones,
  watsonSentenceTones: state.entities.watson.sentenceTones
});

export default connect(msp)(DashboardContainer);
