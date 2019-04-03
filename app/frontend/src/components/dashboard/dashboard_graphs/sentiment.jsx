import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class SentGraph extends Component { // bar graph
    constructor(props) {
        super(props);
        this.state = {
            graphData: this.props.graphData
        };

        this.scores = this.state.graphData.map((el) => {
            return el.score;
        });
    }

    transformScores() {
        let binned = {
            '-5 to -4': 0,
            '-4 to -3': 0,
            '-3 to -2': 0,
            '-2 to -1': 0,
            '-1 to 0': 0,
            '0 to 1': 0,
            '1 to 2': 0,
            '2 to 3': 0,
            '3 to 4': 0,
            '4 to 5': 0,
        };

        for (let i = 0; i < this.scores.length; i++) {
            let curr = this.scores[i]
            if (curr < -4) {
                binned['-5 to -4'] += 1;
            } else if (curr < -3) {
                binned['-4 to -3'] += 1;
            } else if (curr < -2) {
                binned['-3 to -2'] += 1;
            } else if (curr < -1) {
                binned['-2 to -1'] += 1;
            } else if (curr < 0) {
                binned['-1 to 0'] += 1;
            } else if (curr < 1) {
                binned['0 to 1'] += 1;
            } else if (curr < 2) {
                binned['1 to 2'] += 1;
            } else if (curr < 3) {
                binned['2 to 3'] += 1;
            } else if (curr < 4) {
                binned['3 to 4'] += 1;
            } else if (curr < 5) {
                binned['4 to 5'] += 1;    
            }
        }

        this.data = {
            labels: Object.keys(binned), // x-axis
                datasets: [
                    {
                        label: 'Raw Sentiment Score', // bar name
                        data: Object.values(binned), // y-axis
                        backgroundColor: 'blue'
                    },
                ]
        }

        return this.data;
    }

    render() {
        const gray = "rgba(40, 40, 40, 1)";
        const data = this.transformScores();
        return (
            <div className="sentGraph">
                <li className="descriptive">Score: {this.averages().score}</li>
                <li>Comparative: {this.averages().comparative}</li>
                <li>Max Score: {this.averages().maxScore}</li>
                <li>Max Comparative: {this.averages().maxComparative}</li>
                <li>Min Score: {this.averages().minScore}</li>
                <li>Min Comparative: {this.averages().minComparative}</li>
                <Bar
                    data={data}
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
                                    color: gray
                                },
                                ticks: {
                                    fontFamily: "Roboto Condensed",
                                    fontStyle: "400",
                                    fontSize: 12
                                }
                            }]
                        },
                        title: {
                            display: true,
                            text: "Distribution of Sentiment",
                            // fontSize: 25,
                            fontFamily: "Roboto Condensed",
                            fontStyle: "400",
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
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

    // chart() {
    //     const svg = d3.select(document.getElementById('svg'));
        
        
    //     debugger
        
    //     const x = d3.scaleLinear()
    //         .domain([0, d3.max(bins, d => d.length)]).nice()
    //         .range([margin.left, width - margin.right])
    //     const y = d3.scaleLinear()
    //         .domain([0, d3.max(bins, d => d.length)]).nice()
    //         .range([height - margin.bottom, margin.top])
    //     const xAxis = g => g
    //         .attr("transform", `translate(0, ${height - margin.bottom})`)
    //         .call(d3.axisBottom(x).tickSizeOuter(0))
    //         .call(g => g.append("text")
    //             .attr("x", width - margin.right)
    //             .attr("y", -4)
    //             .attr("fill", "#000")
    //             .attr("font-weight", "bold")
    //             .attr("text-anchor", "end")
    //             .text(this.scores.x)
    //         )
    //     const yAxis = g => g
    //         .attr("transform", `translate(${margin.left}, 0)`)
    //         .call(d3.axisLeft(y))
    //         .call(g => g.select(".domain").remove())
    //         .call(g => g.select(".tick:last-of-type text").clone()
    //             .attr("x", 4)
    //             .attr("text-anchor", "start")
    //             .attr("font-weight", "bold")
    //             .text(this.scores.y)
    //         )
    //     const width = 450;
    //     const height = 375;
    //     const margin = {top: 20, right: 20, bottom: 30, left: 40}

    //     const bins = d3.histogram()
    //         .domain(x.domain())
    //         .thresholds(x.ticks(40))(this.scores);

    //     const bar = svg.append("g")
    //         .attr("fill", "steelblue")
    //         .selectAll("rect")
    //         .data(bins)
    //         .join("rect")
    //             .attr("x", d => x(d.x0) + 1)
    //             .attr("width", d => Math.max(0, x(d.x1) - x(d.x0) - 1))
    //             .attr("y", d => y(d.length))
    //             .attr("height", d => y(0) -y(d.length));

    //     svg.append("g")
    //         .call(xAxis);

    //     svg.append("g")
    //         .call(yAxis);
        
    //     return svg.node();
    // }

    averages() {
        const averages = {};
        let comparative = null;
        let score = null;
        let maxComparative = null;
        let maxScore = null;
        let minComparative = null;
        let minScore = null;

        const len = this.state.graphData.length;
        this.state.graphData.forEach((el) => {
            if (score === null && comparative === null) {
                score = el.score;
                comparative = el.comparative;
                maxScore = el.score;
                minScore = el.score;
                maxComparative = el.comparative;
                minComparative = el.comparative;
            } else {
                score += el.score
                comparative += el.comparative;
            }

            if (el.score > maxScore) {
                maxScore = el.score;
            } else if (el.comparative > maxComparative) {
                maxComparative = el.comparative;
            }

            if (el.score < minScore) {
                minScore = el.score;
            } else if (el.comparative < minComparative) {
                minComparative = el.comparative;
            }
        })

        return {
            score: Math.floor(score/len),
            comparative: comparative/len,
            maxScore,
            maxComparative,
            minScore,
            minComparative
        }
    }

    
}

export default SentGraph;
