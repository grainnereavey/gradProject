import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Col, Grid, Row, Button, ButtonToolbar} from 'react-bootstrap';

export default class VehicleDetailsForm extends Component{
    constructor(props){
        super(props);
        this.state ={
            VIN: '',
            mileage: '',
            yearCar: '',
            carNew:''
        }
    };
    render(){
        return(

            <div>
                <h2>Vehicle Details Page</h2>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={2} md={2}> </Col>
                        <Col xs={12} md={8}>

                            <form onSubmit={this.props.onSubmit}>

                            <ButtonToolbar>
                                <Button bsStyle="primary"type="submit" value="">Make/Model/Year</Button>
                                <Button bsStyle="primary"type="submit" value="">VIN</Button>
                            </ButtonToolbar>
                                <FormGroup
                                    controlId="formControlsSelect">
                                    <ControlLabel>When did you get the car? </ControlLabel>
                                    <FormControl componentClass="select" name="yearCar" onChange={this.props.onChange}>
                                        <option selected disabled>Choose a Year</option>
                                        <option value={this.props.yearCar}>2019</option>
                                        <option value={this.props.yearCar}>2018</option>
                                        <option value={this.props.yearCar}>2017</option>
                                        <option value={this.props.yearCar}>2016</option>
                                        <option value={this.props.yearCar}>2015</option>
                                    </FormControl>
                                </FormGroup>
                           
                                <FormGroup
                                    controlId="formControlsSelect">
                                    <ControlLabel>Was the car new when you got it? </ControlLabel>
                                    <FormControl componentClass="select" name="carNew" onChange={this.props.onChange}>
                                        <option selected disabled>Choose Answer</option>
                                        <option value={this.props.carNew}>Yes</option>
                                        <option value={this.props.carNew}>No</option>
                                    </FormControl>
                                </FormGroup>
                                <ButtonToolbar>
                                    <Button className="text-center" bsStyle="primary"type="submit" value="Submit">Submit</Button>
                                </ButtonToolbar>
                            </form>

                        </Col>
                        <Col xs={2} md={2}></Col>
                    </Row>

                </Grid>

            </div>


        );
    }
}