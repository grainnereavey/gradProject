import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Col, Grid, Row, Button, ButtonToolbar} from 'react-bootstrap';

export default class PersonalDetailsForm extends Component {

    getValidationState() {
        
        const length = this.state.firstName.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
      }
    
    constructor(props){
        super(props);
        this.state ={
            title: '',
            firstName: '',
            lastName: '',
            suffix: '',
            DOB:'',
            gender: '',
        }
    };

    render() {
        return (

            <div>
                <h2>Personal Details Page</h2>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={2} md={2}> </Col>
                        <Col xs={12} md={8}>

                            <form onSubmit={this.props.onSubmit}>
                                <FormGroup
                                    controlId="formControlsSelect">
                                    <ControlLabel>*Title: </ControlLabel>
                                    <FormControl 
                                        componentClass="select" 
                                        name="title" 
                                        onChange={this.props.onChange}
                                        required='required'>
                                        <option selected disabled value=''>Choose a Title</option>
                                        <option value={this.props.title}>Mr</option>
                                        <option value={this.props.title}>Mrs</option>
                                        <option value={this.props.title}>Miss</option>
                                        <option value={this.props.title}>Ms</option>
                                        <option value={this.props.title}>Dr</option>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup
                                    controlId="formBasicText"
                                    validationState={this.getValidationState()}>
                                    <ControlLabel>*First Name: </ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter First Name"
                                        onChange={this.props.onChange}
                                        name="firstName"
                                        required/>
                                </FormGroup>
                                
                                <FormGroup
                                    controlId="formBasicText">
                                    <ControlLabel>*Surname: </ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter Last Name"
                                        onChange={this.props.onChange}
                                        name="lastName"
                                        required/>
                                </FormGroup>
                                <FormGroup
                                    controlId="formControlsSelect">
                                    <ControlLabel>*Suffix:</ControlLabel>
                                    <FormControl 
                                    componentClass="select" 
                                    name="suffix" 
                                    onChange={this.props.onChange}
                                    required='required'>
                                        <option selected disabled value=''>Choose a Suffix</option>
                                        <option value={this.props.suffix}>None</option>
                                        <option value={this.props.suffix}>Sr.</option>
                                        <option value={this.props.suffix}>Jr.</option>
                                        <option value={this.props.suffix}>II</option>
                                        <option value={this.props.suffix}>III</option>
                                        <option value={this.props.suffix}>IV</option>
                                    </FormControl>
                                </FormGroup>
                                <FormGroup>
                                    <ControlLabel>*Date of Birth: </ControlLabel>
                                    <input type="date" class="form-control" name="DOB" onChange={this.props.onChange} required />
                                </FormGroup>
                                <FormGroup
                                    controlId="formControlsSelect">
                                    <ControlLabel>*Gender: </ControlLabel>
                                    <FormControl 
                                    componentClass="select" 
                                    name="gender" 
                                    onChange={this.props.onChange}
                                    required='required'>
                                        <option selected disabled value=''>Choose a Gender</option>
                                        <option value={this.props.gender}>Male</option>
                                        <option value={this.props.gender}>Female</option>
                                        <option value={this.props.gender}>Non-Binary</option>
                                    </FormControl>
                                </FormGroup>

                                 <div>
                                        <Col xs={6} md={6} text-center>
                                            <ButtonToolbar text-center>
                                                <Button className="center"bsStyle="primary"type="submit" value="Submit">Save and Continue</Button>
                                            </ButtonToolbar>
                                        </Col>
                                </div>
                              
                            </form>

                        </Col>
                        <Col xs={2} md={2}></Col>
                    </Row>

                </Grid>

            </div>
        );
    }
}

