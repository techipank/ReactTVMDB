export const RESULT_SUCCESS = 'RESULT_SUCCESS';
export const RESULT_FAILED = 'RESULT_FAILED';
export const SHOW_DETAIL_SUCCESS = 'SHOW_DETAIL_SUCCESS';
export const TYPEAHEAD_SUCCESS = 'TYPEAHEAD_SUCCESS';
const initialState = {
    showList:null
}

export default (state = initialState,action)=>{
    switch (action.type) {
        case RESULT_SUCCESS :
            console.log(RESULT_SUCCESS);
            return {
                ...state,
                showList:action.data
            }
        case RESULT_FAILED:
            console.log(RESULT_FAILED)
            return {
                ...state,
                showList:[]
            }
        case SHOW_DETAIL_SUCCESS:
            return{
                ...state,
                showDetails:action.data
            }
        case TYPEAHEAD_SUCCESS:
            return {
                ...state,
                suggestions:action.data
            }
        default:
            return {
                ...state
            }
    }
}