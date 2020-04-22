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
        let userName=this.state.userName
        let userPass = this.state.userPass
        let userEmail = this.state.userEmail
        let conPass = document.getElementById('conpass').value;
        let userData={
                userName,
                userPass,
                userEmail
            };
        if(userPass === conPass)
        {    axios.post('http://localhost:5000/add',userData)
            .then(res=>{
                alert(res.data);
                this.setState({
                    userName:'',
                    userEmail:'',
                    userPass:'',
                })
                document.getElementById('conpass').value='';
            })
            .catch(err=>{console.log(err)});
        }
        else {
            alert('Passwords should match!')
        }
    }
    render(){
        return(
            <div>
                <form style={{margin:'5% 15%'}} onSubmit={this.handleSubmit} name="userSignup-form">
                    <div className="form-group">
                        <label>Name:</label>
                        <input  className="form-control" 
                                type="text" 
                                placeholder="enter name" 
                                autoComplete="off" 
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input className="form-control" 
                               type="password" 
                               placeholder="enter password"
                               autoComplete="off" 
                               name="userPass"
                               value={this.state.userPass}
                               onChange={this.handlePassChange}/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input className="form-control"
                                type="password"  
                                placeholder="confirm password" 
                                autoComplete="off"
                                id="conpass"
                                name="conPass"
                                />
                    </div>
                    <div className="form-group">
                        <label>Email:</label>
                        <input className="form-control"
                               type="email"  
                               placeholder="enter email" 
                               autoComplete="off" 
                               name="userEmail"
                               value={this.state.userEmail}
                               onChange={this.handleEmailChange}/>
                    </div>
                    <input type="submit" 
                           value="Submit" 
                           className="btn btn-success"/>
                </form>
                <p>Already Signed up? <a href="/">Login</a></p>
            </div>
        )
    }
}