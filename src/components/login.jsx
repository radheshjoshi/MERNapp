import React from 'react';


export default class Login extends React.Component{
    render(){
        return(
            <div>
                <form style={{margin:'5% 15%'}}>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" placeholder="enter your username"/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input type="password" className="form-control" placeholder="enter your password"/>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-success"/>
                </form>
            </div>
        )
    }
}