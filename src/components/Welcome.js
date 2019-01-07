import React, { Component } from 'react';

export default class Welcome extends Component{
    render(){
        return(
            <div>
                <h2>Welcome Page</h2>
                <form onSubmit={this.props.onSubmit}>
                    <input type="submit" value="Get Started on Autoquote"/>
                </form>
            </div>
        )
    }
}