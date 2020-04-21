import React from 'react';
import axios from 'axios';

export default class Signup extends React.Component{

    constructor(props){
        super(props)
        this.handleEmailChange= this.handleEmailChange.bind(this);
        this.handleNameChange= this.handleNameChange.bind(this);
        this.handlePassChange= this.handlePassChange.bind(this);

        this.state={
            userName:'',
            userPass:'',
            userEmail:'',
        }
    }

    handleNameChange=(e)=>{
        this.setState({
            userName:e.target.value
        })
    }
    handleEmailChange=(e)=>{
        this.setState({
            userEmail:e.target.value
        })
    }    
    handlePassChange=(e)=>{
        this.setState({
            userPass:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const userName=this.state.userName
        const userPass = this.state.userPass
        const userEmail = this.state.userEmail
        const userData={
                userName,
                userPass,
                userEmail
            };
        axios.post('http://localhost:5000/add',userData)
            .then((res)=>{
                console.log(res.data);
            })
            .catch(err=>{console.log(err)});
    }
    render(){
        return(
            <div>
                <form action='#' style={{margin:'5% 15%'}} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input  className="form-control" 
                                type="text" 
                                placeholder="enter name" 
                                autoComplete="off" 
                                name="userName"
                                onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" 
                               type="password" 
                               placeholder="enter password"
                               autoComplete="off" 
                               name="userPass"
                               onChange={this.handleEmailChange}/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input className="form-control"
                                type="password"  
                                placeholder="confirm password" 
                                autoComplete="off"
                                id="conpass"
                                name="conPass"
                                onChange={this.handlePassChange}/>
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control"
                               type="email"  
                               placeholder="enter email" 
                               autoComplete="off" 
                               name="userEmail"
                               onChange={this.handleChange}/>
                    </div>
                    <input type="submit" 
                           value="Submit" 
                           className="btn btn-success"/>
                </form>
            </div>
        )
    }
}