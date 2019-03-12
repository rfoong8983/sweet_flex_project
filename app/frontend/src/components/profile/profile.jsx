import React from 'react';

//React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: this.makeData()
        }
    }

    makeData(){
        return [{
            hashtag: "#apples",
            time: "3/11/2019 2:30pm",
            happiness: "0.89",
            anger: "0.30",
            sadness: "0.79",
            envy: "0.54"
        }, 
        {    
            hashtag: "#oranges",
            time: "3/14/2019 2:34pm",
            happiness: "0.41",
            anger: "0.85",
            sadness: "0.11",
            envy: "0.33"
        },
        {    
            hashtag: "#grapes",
            time: "3/14/2019 7:00pm",
            happiness: "0.70",
            anger: "0.35",
            sadness: "0.50",
            envy: "0.30"
        },

]
    }

    render(){
        // debugger
        const {data} = this.state;
        return( 
            <div className="profile-page-container">
                <div className="table-wrapper">
                <h2 className="table-title"> Search History </h2>
                <div className="history-table">
                <ReactTable
                data={data}
                columns={[
                    {
                    Header: "Search Info",
                        columns: [
                            {
                                Header: "Hashtag",
                                accessor: "hashtag",
                                className: 'hashtag'
                            },
                            {
                                Header: "Time",
                                accessor: "time",
                            }
                        ]
                    },
                    {
                    Header: "Sentiment Info",
                        columns: [
                            {
                                Header: "Happiness",
                                accessor: "happiness"
                            },
                            {
                                Header: "Anger",
                                accessor: "anger"
                            },
                            {
                                Header: "Sadness",
                                accessor: "sadness"
                            },
                            {
                                Header: "Envy",
                                accessor: "envy"
                            }
                        ]
            },
          ]} 
          defaultPageSize={10}
          className="history-table"  
            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
