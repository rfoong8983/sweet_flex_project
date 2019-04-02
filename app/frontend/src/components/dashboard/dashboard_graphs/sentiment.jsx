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

    aggregate() {
        const averages = {};
        const comp = 0;
        const score = 0;
        this.state.graphData.forEach((el) => {
            
        })
    }

    render() {
        return (
            <div className="sentGraph">
                {this.test}
            </div>
        )
    }
}

export default SentGraph;
