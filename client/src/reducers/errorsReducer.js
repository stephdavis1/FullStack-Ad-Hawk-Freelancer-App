const errorsReducer = (state = [], action) => {
    switch (action.type){
        case 'SET_ERRORS':
            return action.jobs;
        case 'RESET_ERRORS':
            return [...state, ...action.jobs];
        default:
            return state;
    }
};

export default errorsReducer;