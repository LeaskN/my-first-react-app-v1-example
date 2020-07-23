// stateful component
import React, { Component } from 'react';

class Hello extends Component {
    state = {
        formal: true,
        thing: 'string'
    };

    swapper = () => {
        console.log(this.state);
        this.setState({
            formal: !this.state.formal
        })
    }

    render(){
        return (
            <React.Fragment>
                {this.state.formal ? 
                    <h1>Hi Mr.{ this.props.userInfo.lastName } from the Hello Component!</h1> : 
                    <h1>Hi { this.props.userInfo.firstName } from the Hello Component!</h1>
                }
                
                <button onClick={this.swapper}><h1>Click Me!</h1></button>
            </React.Fragment>
        )
    }
}

export default Hello;