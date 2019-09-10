import * as actionTypes from '../actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                persons: state.persons.concat(action.payload)
            }
        case actionTypes.DELETE:
            const updatedArray = state.persons.filter(person => person.id !== action.id);
            return {
                ...state,
                persons: updatedArray
            }
    }
    return state;
};

export default reducer;