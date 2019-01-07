import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Welcome from "./components/Welcome";
import PersonalDetailsForm from "./components/PersonalDetailsForm";
import AddressDetailsForm from "./components/AddressDetailsForm";
import VehicleDetailsForm from "./components/VehicleDetailsForm";
import Summary from "./components/Summary";


const MAX_STEPS = 5;

class App extends Component {
    constructor(props){
        super(props);
        this.state ={
            step:0,
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
        step: (this.state.step === MAX_STEPS)? 0 :this.state.step +1
        });

    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    determineRender(){
        switch(this.state.step){
            case 0:
                return <Welcome onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            case 1:
                return <PersonalDetailsForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            case 2:
                return <AddressDetailsForm values={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            case 3:
                return <VehicleDetailsForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            case 4:
                return <Summary values={this.state} onChange={this.handleChange} onSubmit={this.handleSubmit}/>
            default:
                return <div>You skipped too much!</div>        
        }
    }

    render(){
        return(
            <div className = "App">
                
                <div>
                    <Header />
                </div>
                <main role="main">
                    <hr class="my-4"/>
                    <h1 class="display-4">Allstate Autoquote Form Test</h1>
                    <hr class="my-4"/>
                    
                    <section class="jumbotron text-center">
                        {this.determineRender()}
                    </section>
                </main>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;