import React, {Component} from "react";

// När admin är inloggad kommer hen hit

class AdminProfile extends Component{


    render(){
        return(
            <div>
                <div>{this.props.userData.username}</div>
            </div>
        )
    }
}

export default AdminProfile