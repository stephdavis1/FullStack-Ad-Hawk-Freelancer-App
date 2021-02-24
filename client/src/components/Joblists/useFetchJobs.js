import { useReducer, useEffect } from 'react';
import axios from 'axios';

const actions = {
    make_request: 'make-request',
    get_data: 'get-data',
    error: 'error',
    update_has_next_page: 'update-has-next-page'
}
const baseUrl = `${process.env.NODE_ENV === 'development' ? 'https://thingproxy.freeboard.io/fetch/' : 'https://cors-anywhere.herokuapp.com/'}https://jobs.github.com/positions.json/`;
// const baseUrl = 'http://localhost:8080/jobs'

function reducer(state, action) {
    switch (action.type) {
        case actions.make_request:
            return { loading: true, jobs: [], hasNextPage: false }
        case actions.get_data:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case actions.error:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }
        case actions.update_has_next_page:
            return { ...state, hasNextPage: action.payload.hasNextPage }

        default:
            return state
    }
}


export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true, hasNextPage: false })

    const filterDescription = (description, state) => {
        if (description !== "") {
            // make a copy of the state
            let stateCopy = { ...state }
            // filter out the state.jobs.description based on params.description
            stateCopy.jobs = stateCopy.jobs.filter((job) => {
                return job.title.includes(description)
    
            })
            // save filter results back to state copy
            console.log("stateCopy",stateCopy)
            console.log("update_has_next_page", actions.update_has_next_page)
            
            return stateCopy
        }
        
        return state
    }
    const filterLocation = (location, state) => {
        if (location !== "") {
            // make a copy of the state
            let stateCopy = { ...state }
            // filter out the state.jobs.description based on params.description
            stateCopy.jobs = stateCopy.jobs.filter((job) => {
                return job.location.includes(location)
    
            })
            // save filter results back to state copy
            console.log(stateCopy)
            return stateCopy
        }
        return state
    }

    useEffect(() => {
        const cancelToken1 = axios.CancelToken.source()
        dispatch({ type: actions.make_request })
        axios.get(baseUrl, {
            cancelToken: cancelToken1.token,
            params: { markdown: true, page: page, ...params }
        }).then(res => {
            dispatch({ type: actions.get_data, payload: { jobs: res.data } })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: actions.error, payload: { error: e } })
        })

        const cancelToken2 = axios.CancelToken.source()
        axios.get(baseUrl, {
            cancelToken: cancelToken2.token,
            params: { markdown: true, page: page + 1, ...params }
        }).then(res => {
            dispatch({ type: actions.update_has_next_page, payload: { hasNextPage: res.data.length !== 5 } })
            console.log(res.data)
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: actions.error, payload: { error: e } })
        })

        return () => {
            cancelToken1.cancel()
            cancelToken2.cancel()
        }
    }, [params, page])


    let descriptionFiltered = filterDescription(params.description, state);
    let locationFiltered = filterLocation(params.location, descriptionFiltered);

    return locationFiltered;
   
}