import React, { Component} from 'react';

class MyGreet extends Component {

    render (){
        return (
            <div>
            Hello from Class components {this.props.name}!!!
            </div>

        );
    }
}

export default MyGreet;