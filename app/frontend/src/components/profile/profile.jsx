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
            anger: "0.89",
            fear: "0.30",
            joy: "0.79",
            sadness: "0.54",
            analytical: "0.30",
            confident: "0",
            tenative: "0.54"
        }, 
        {    
            hashtag: "#oranges",
            time: "3/14/2019 2:34pm",
            anger: "0.89",
            fear: "0.30",
            joy: "0.79",
            sadness: "0",
            analytical: "0.65",
            confident: "0",
            tenative: "0.57"
        },
        {    
            hashtag: "#grapes",
            time: "3/14/2019 7:00pm",
            anger: "0.89",
            fear: "0.51",
            joy: "0",
            sadness: "0.54",
            analytical: "0",
            confident: "0.79",
            tenative: "0.54"
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
                                Header: "Anger",
                                accessor: "anger",

                            },
                            {
                                Header: "Fear",
                                accessor: "fear"
                            },
                            {
                                Header: "Joy",
                                accessor: "joy"
                            },
                            {
                                Header: "Sadness",
                                accessor: "sadness"
                            },
                            {
                                Header: "Analytical",
                                accessor: "analytical"
                            },
                            {
                                Header: "Confident",
                                accessor: "confident"
                            },
                            {
                                Header: "Tenative",
                                accessor: "tenative"
                            },
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
