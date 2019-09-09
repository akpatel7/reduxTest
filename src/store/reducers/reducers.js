import * as actionTypes from '../actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.ADD: {
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            }
            return {
                ...state,  
                persons: state.persons.concat(newPerson)
            }
        }
        case actionTypes.DELETE: {
            const updatedArray = state.persons.filter(person => person.id !== action.id);
            return { 
                ...state, 
                persons: updatedArray
            }
        }
        default:
    }
    return state;
};

export default reducer;