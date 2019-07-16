const campaignReducerDefaultState = {
        campaignList: [],
        loading: false,
        error: false
};

const campaignReducer = (state = campaignReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_CAMPAIGNS_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'GET_CAMPAIGNS_SUCCESS':
            return {
                ...state,
                campaignList: action.campaigns,
                loading: false
            };
        case 'GET_CAMPAIGNS_FAILURE':
            return {
                ...state,
                campaignList: [],
                loading: false,
                error: action.error
            };
        default:
            return state;
    };
};

export default campaignReducer;