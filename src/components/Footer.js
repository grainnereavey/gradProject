import React, { Component } from 'react';

export default class Footer extends Component{
    render(){
        return(
            <div>
                <h4>Year {new Date().getFullYear()}</h4>
            </div>
        )
    }
}