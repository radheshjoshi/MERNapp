import React from 'react';
import axios from 'axios';


export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.onNameChange=this.onNameChange.bind(this)
        this.onPassChange=this.onPassChange.bind(this)
        this.state={
            username:'',
            password:''
        }
    }

    onNameChange=(e)=>{
        this.setState({
            username : e.target.value
        })
    }

    onPassChange=(e)=>{
        this.setState({
            password : e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        
        let  userName=this.state.username
        let userPass=this.state.password
        let users={
            userName,
            userPass
        }
        axios.post('http://localhost:5000/login',users)
            .then((res)=>alert(res.data))
            .catch(err=>err.message)
    }


    render(){
        return(
            <div>
                <form action="#" style={{margin:'5% 15%'}} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" placeholder="enter your username" onChange={this.onNameChange}/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="enter your password" onChange={this.onPassChange} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-success"/>
                </form>
                 <p>Not a user?<a href="/">Signup</a></p>
            </div>
        )
    }
}