import React, { Component } from 'react';


export class Button extends Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <button onClick ={this.props.clickedFunction} disabled = {this.props.hide}>{this.props.text}</button>
        );
    }
}



// export default Button