import { ACTIONS } from "../actions/actionTypes";

const initialStateInput = {
    novoValorInput: "",
}

const initialStatePlanet = {
    novoValorPlaneta: {
        climate: "",
        created: "",
        diameter: "",
        edited: "",
        films: [],
        gravity: "",
        name: "",
        orbital_period: "",
        population: "",
        residents: [],
        rotation_period: "",
        surface_water: "",
        terrain: "",
        url: ""
    }
}

export const setaReducerStateInput = (state = initialStateInput, action) => {
    switch (action.type) {
        case ACTIONS.CLICK_UPDATE_VALUE:
            return {
                ...state,
                novoValorInput: action.novoValorInput
            };
        default:
            return state;
    }
};

export const setaReducerStatePlanet = (state = initialStatePlanet, action) => {
    switch (action.type) {
        case ACTIONS.SET_PLANET:
            return {
                ...state,
                novoValorPlaneta: action.novoValorPlaneta
            };
        default:
            return state;
    }
};