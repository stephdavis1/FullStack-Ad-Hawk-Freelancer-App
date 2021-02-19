import { useReducer, useEffect } from 'react';
import axios from 'axios';

const actions = {
    make_request: 'make-request',
    get_data: 'get-data',
    error: 'error'
}

const baseUrl = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
 
function reducer(state, action) {
    switch (action.type) {
        case actions.make_request:
            return { loading: true, jobs: [] }
        case actions.get_data:
            return {...state, loading: false, jobs: action.payload.jobs }
        case actions.error:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }

        default:
            return state
    }
}

export default function useFetchJobs(params, page){
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({ type: actions.make_request })
        axios.get(baseUrl, {
            cancelToken: cancelToken.token,
            params: { markdown: true, page: page, ...params }
        }).then(res => {
            dispatch({type: actions.get_data, payload: { jobs: res.data } }) 
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({type: actions.error, payload: { error: e } })
        })

        return () => {
            cancelToken.cancel()
        }
    },[params, page])
    

    return state
}