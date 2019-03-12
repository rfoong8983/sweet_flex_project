import React from 'react';

//React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [this.makeData()]
        }
    }

    makeData(){
        return {
            hashtag: "#apples",
            date: "3/11/2019, 2:30pm",
            happiness: "0.89",
            anger: "0.30",
            sadness: "0.79",
            envy: "0.54"
        }
    }

    render(){
        // debugger
        const {data} = this.state;
        return( 
            <div className="profile-page-container">
                <div className="history">
                <ReactTable
                data={data}
                columns={[
                    {
                    Header: "Search Info",
                        columns: [
                            {
                                Header: "Hashtag",
                                accessor: "hashtag"
                            },
                            {
                                Header: "Time",
                                id: "time",
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
          ]} defaultPageSize={10}/>

                </div>
            </div>
        )
    }
}

export default Profile;
