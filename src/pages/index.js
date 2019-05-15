
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.scss';

import { connect } from "react-redux";

import { bindActionCreators } from 'redux';
import { atualizarValorInput, atualizarValorPlanet } from '../actions';

import axios from "axios";

import Planet from "./Planet";

class App extends Component {
    state = {
        inputValue: ''
    }
    
    inputChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    getPlanet() {
        let idPlanet = Math.floor(Math.random() * 61) + 1;
        axios
        .post(`https://swapi.co/api/planets/${idPlanet}`)
        .then(res =>  {
            console.log(this)
            console.log(this.props.novoValorPlanetaProps);
            this.props.atualizarValorPlanetProps(res.data);
        })
        .catch(res => console.log("Ocorreu um erro, tente novamente mais tarde: " + res));
    }

    componentDidMount(){
        this.getPlanet();
    }

    render() {
        const {
            atualizarValorInputProps,
            novoValorInputProps
        } = this.props;
        const { inputValue } = this.state;
        
        
        return (
            <div className="App">

                <Planet
                    planetProps = {this.props.novoValorPlanetaProps}
                    atualizarValorPlaneta = {this.getPlanet.bind(this)}
                />

            </div>
        );
    }
}

const mapStateToProps = store => ({
    novoValorInputProps: store.setaReducerStateInputStore.novoValorInput,
    novoValorPlanetaProps: store.setaReducerStatePlanetStore.novoValorPlaneta
})

const mapDispatchToProps = dispatch => bindActionCreators({ 
    atualizarValorInputProps: atualizarValorInput,
    atualizarValorPlanetProps: atualizarValorPlanet
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);