import React, { Component } from 'react';

export default class Summary extends Component{
    render(){
        return(
            <div>
                <h2>Summary Page</h2>
                    <p>Title: {this.props.values.title}</p>
                    <p>First name: {this.props.values.firstName}</p>
                    <p>Last name: {this.props.values.lastName}</p>
                    <p>Suffix: {this.props.values.suffix}</p>
                    <p>DOB: {this.props.values.DOB}</p>
                    <p>Gender: {this.props.values.gender}</p>
                    <p>Apt: {this.props.values.apt}</p>
                    <p>Street Address: {this.props.values.streetAddress}</p>
                    <p>City: {this.props.values.city}</p>
                    <p>State: {this.props.values.state}</p>
                    <p>VIN: {this.props.values.VIN}</p>
                    <p>Mileage: {this.props.values.Mileage}</p>

            </div>
        );
    }
}