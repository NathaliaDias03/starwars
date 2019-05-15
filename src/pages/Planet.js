import React from 'react';
import '../style/Planet.scss';

// function Planet(props) {
const Planet = (props) => {
    console.log("a")
    console.log(props.planetProps.name, props.atualizarValorPlaneta)
    console.log("b")


    return (
        <div className="App">

            <div className="pricing-box-container">

                <div className="pricing-box pricing-box-bg-image text-center">
                    <h1 className="text-center">{props.planetProps.name}</h1>
                    
                    <ul className="features-list">
                        <li><strong>Population: </strong> {props.planetProps.population}</li>
                        <li><strong>Climate: </strong>{props.planetProps.climate}</li>
                        <li><strong>Terrain: </strong> {props.planetProps.terrain}</li>
                        <li><strong>Featured in </strong> {props.planetProps.films.length?props.planetProps.films.length:0} films</li>
                    </ul>
                    <button className="btn-primary" onClick={props.atualizarValorPlaneta}>Next</button>
                </div>

            </div>


        </div>
    );
}

export default Planet;