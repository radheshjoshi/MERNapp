import React from 'react';
import {Link} from 'react-router-dom';
  

export default class Index extends React.Component{
    render(){
        return(
            <div className="jumbotron" style={{height:'100vh'}}>
                <Link to='/signup' style={{width:'150px', margin:'20px'}} className="btn btn-lg btn-primary">SignUp</Link>
                <Link to='/login' style={{width:'150px', margin:'20px'}} className="btn btn-lg btn-secondary">LogIn</Link>
            </div>
        )
    }
}