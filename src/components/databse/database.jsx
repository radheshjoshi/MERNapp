import React from 'react';
import axios from 'axios';
import Datatable from './datatable.jsx';
 

export default class UsersData extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userCollection:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:5000/')
            .then(res=>{
                this.setState({userCollection : res.data})
            })        
            .catch(err=>console.log(err.message));
    }
    dataTable=()=>{
        return this.state.userCollection.map((data,i)=>{
            return <Datatable obj={data} key={i}/>
        });
    }

    render(){
        return(
            <div className="wrapper-users">
                <div className="container">
                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataTable()}
                        </tbody>
                    </table>
                </div>
                <a href="/">Go to home</a>
            </div>
        )
    }
}