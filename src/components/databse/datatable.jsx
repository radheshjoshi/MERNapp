import React from 'react';
 

export default class Datatable extends React.Component{
    render(){
        return(
            <tr>
                <td>
                    {this.props.obj._id}
                </td>
                <td>
                    {this.props.obj.username}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
            </tr>
        )
    }
}