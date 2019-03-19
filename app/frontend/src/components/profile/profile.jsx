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
                <h2 className="table-title" flex-center> Search History </h2>
                <div className="history-table">
                <ReactTable
                data={data}
                style={{
                  height: "500px"
                }}
                columns={[
                    {
                    Header: "Search Info",
                    headerClassName: "main-header-col search-info-col flex-center",
                        columns: [
                            {
                                Header: "Hashtag",
                                headerClassName: "search-info-col flex-center",
                                accessor: "hashtag",
                                className:"search-info-col flex-center",
                                width: 150
                            },
                            {
                                Header: "Time",
                                headerClassName: "search-info-col flex-center",
                                width: 180,
                                accessor: "time",
                                className:"search-info-col flex-center"
                            }
                        ]
                    },
                    {
                    Header: "Sentiment Info",
                    headerClassName: "main-header-col sentiment-col flex-center",
                        columns: [
                            {
                                Header: "Anger",
                                headerClassName: "sentiment-col flex-center",
                                accessor: "anger",
                                className:"sentiment-col flex-center",
                            },
                            {
                                Header: "Fear",
                                headerClassName: "sentiment-col flex-center",
                                accessor: "fear",
                                className:"sentiment-col flex-center"
                            },
                            {
                                Header: "Joy",
                                headerClassName: "sentiment-col flex-center",
                                accessor: "joy",
                                className:"sentiment-col flex-center"
                            },
                            {
                                Header: "Sadness",
                                headerClassName: "sentiment-col flex-center",
                                accessor: "sadness",
                                className:"sentiment-col flex-center"
                            },
                            {
                                Header: "Analytical",
                                headerClassName: "sentiment-col flex-center",
                                accessor: "analytical",
                                className:"sentiment-col flex-center"
                            },
                            {
                                Header: "Confident",
                                headerClassName: "sentiment-col flex-center",
                                accessor: "confident",
                                className:"sentiment-col flex-center"
                            },
                            {
                                Header: "Tenative",
                                headerClassName: "sentiment-col flex-center",
                                accessor: "tenative",
                                className:"sentiment-col flex-center"
                            },
                        ]
            },
          ]} 
          defaultPageSize={10}
          // className="history-table"  
            />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;