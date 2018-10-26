import request from 'superagent'
const API_URL = 'http://api.tvmaze.com';

export function showListAction(dispatch){
    return function(dispatch){
        return request
        .get(API_URL+'/shows')
        .set('Accept', 'application/json')
        .then(res=>{
            dispatch({
                    type:'RESULT_SUCCESS',
                    data:res.body
                })
        })
    }
};

export function getShowDetails(id){
    return (dispatch)=>{
        return request
        .get(`${API_URL}/shows/${id}?embed=cast`)
        .then(res=>{
            dispatch({
                type:'SHOW_DETAIL_SUCCESS',
                data:res.body
            });
        });
    };
};

export const typeAheadSearchAction = (term) =>{
    return (dispatch)=>{
        return request
        .get(`${API_URL}/search/shows`)
        .query({q:term})
        .then(typeAheadSearchRes =>{
            dispatch({
                type:'TYPEAHEAD_SUCCESS',
                data:typeAheadSearchRes.body
            });
        });
    }
}