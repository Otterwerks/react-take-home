const messageReducerDefaultState = {
    message: '',
    display: false
};

const messageReducer = (state = messageReducerDefaultState, action) => {
switch (action.type) {
    case 'SHOW_MESSAGE':
        return {
            ...state,
            message: action.message,
            display: true
        };
    case 'HIDE_MESSAGE':
        return{
            ...state,
            message: '',
            display: false
        }
    default:
        return state;
};
};

export default messageReducer;