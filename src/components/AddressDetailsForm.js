import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Col, Grid, Row, Button, ButtonToolbar, ToggleButtonGroup } from 'react-bootstrap';


export default class AddressDetailsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            apt: '',
            streetAddress: '',
            city: '',
            state: '',
            time: '',
            showMessage: false
        }
    };

    _showMessage = (bool) => {
        this.setState({
            showMessage: bool
        })
    };

    render() {

        return (

            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={2} md={2}> </Col>
                        <Col xs={12} md={8}>

                            <h2> Where do you live, {this.props.values.firstName}? </h2>

                            <form onSubmit={this.props.onSubmit}>
                                <FormGroup
                                    controlId="formBasicText">
                                    <ControlLabel>*Street Address: </ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter Street Address"
                                        onChange={this.props.onChange}
                                        name="streetAddress"
                                        required />
                                </FormGroup>
                                <FormGroup
                                    controlId="formBasicText">
                                    <ControlLabel>Apt/Unit #: </ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter Apt/Unit #"
                                        onChange={this.props.onChange}
                                        name="apt"
                                    />
                                </FormGroup>
                                <FormGroup
                                    controlId="formBasicText">
                                    <ControlLabel>*City: </ControlLabel>
                                    <FormControl
                                        type="text"
                                        placeholder="Enter City"
                                        onChange={this.props.onChange}
                                        name="city"
                                        required />
                                </FormGroup>
                                <FormGroup
                                    controlId="formControlsSelect">
                                    <ControlLabel>*State: </ControlLabel>
                                    <FormControl
                                        componentClass="select"
                                        name="state"
                                        onChange={this.props.onChange}
                                        required='required'>
                                        <option selected disabled value=''>Choose a State</option>
                                        <option value={this.props.state}>California</option>
                                        <option value={this.props.state}>Texas</option>
                                        <option value={this.props.state}>Illnois</option>
                                    </FormControl>
                                </FormGroup>
                                <ButtonToolbar id="twoYearsQuestion">
                                    <ControlLabel>*Have you lived at this address for more than 2 years?</ControlLabel>
                                    <br></br>
                                    <ToggleButtonGroup type="radio" name="years">
                                        <button onClick={this._showMessage.bind(null, true)}>No</button>
                                        <button onClick={this._showMessage.bind(null, false)}>Yes</button>
                                        {this.state.showMessage &&
                                            (<div>
                                                <FormGroup
                                                    controlId="formBasicText">
                                                    <ControlLabel>*Street Address: </ControlLabel>
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Enter Street Address"
                                                        onChange={this.props.onChange}
                                                        name="prevStreetAddress"
                                                        required />
                                                </FormGroup>
                                                <FormGroup
                                                    controlId="formBasicText">
                                                    <ControlLabel>Apt/Unit #: </ControlLabel>
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Enter Apt/Unit #"
                                                        onChange={this.props.onChange}
                                                        name="prevApt"
                                                    />
                                                </FormGroup>
                                                <FormGroup
                                                    controlId="formBasicText">
                                                    <ControlLabel>*City: </ControlLabel>
                                                    <FormControl
                                                        type="text"
                                                        placeholder="Enter City"
                                                        onChange={this.props.onChange}
                                                        name="prevCity"
                                                        required
                                                    />
                                                </FormGroup>
                                                <FormGroup
                                                    controlId="formControlsSelect">
                                                    <ControlLabel>*State: </ControlLabel>
                                                    <FormControl
                                                        componentClass="select"
                                                        name="prevState"
                                                        onChange={this.props.onChange}
                                                        required='required' />
                                                    <option selected disabled value=''>Choose a State</option>
                                                    <option value={this.props.state}>California</option>
                                                    <option value={this.props.state}>Texas</option>
                                                    <option value={this.props.state}>Illnois</option>
                                                </FormGroup>

                                            
                                            </div>)
                                            };
                                    </ToggleButtonGroup>
                                </ButtonToolbar>

                                <ButtonToolbar>
                                    <Button bsStyle="primary" type="submit" value="Submit">Save and Continue</Button>
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

