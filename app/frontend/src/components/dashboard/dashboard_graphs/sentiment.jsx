import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

class SentGraph extends Component { // bar graph
    constructor(props) {
        super(props);
        this.state = {
            graphData: this.props.graphData
        };
        
        this.test = this.state.graphData.map((el, idx) => {
            return (
                <li key={idx}>
                    {el.words}
                </li>
            )
        });
    }

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

    render() {
        return (
            <div className="sentGraph">
                <li>Score: {this.averages().score}</li>
                <li>Comparative: {this.averages().comparative}</li>
                <li>Max Score: {this.averages().maxScore}</li>
                <li>Max Comparative: {this.averages().maxComparative}</li>
                <li>Min Score: {this.averages().minScore}</li>
                <li>Min Comparative: {this.averages().minComparative}</li>
            </div>
        )
    }
}

export default SentGraph;
