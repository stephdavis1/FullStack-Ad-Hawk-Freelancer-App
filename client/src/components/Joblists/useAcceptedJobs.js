import { useReducer, useEffect } from 'react';
import axios from 'axios';
const actions = {
    make_request: 'make-request',
    get_data: 'get-data',
    error: 'error',
}
const baseUrl = 'http://localhost:8080/jobs/myjobs'
function reducer(state, action) {
    switch (action.type) {
        case actions.make_request:
            return { loading: true, jobs: [], }
        case actions.get_data:
            return { ...state, loading: false, jobs: action.payload.jobs }
        case actions.error:
            return { ...state, loading: false, error: action.payload.error, jobs: [] }
        default:
            return state
    }
}
export default function useFetchJobs(params, page) {
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })
    const filterDescription = (description, state) => {
        if (description !== "") {
            // make a copy of the state
            let stateCopy = { ...state }
            // filter out the state.jobs.description based on params.description
            stateCopy.jobs = stateCopy.jobs.filter((job) => {
                return job.title.includes(description)
            })
            // save filter results back to state copy
            console.log("stateCopy", stateCopy)
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
        return () => {
            cancelToken1.cancel()
        }
    }, [params])
    let descriptionFiltered = filterDescription(params.description, state);
    let locationFiltered = filterLocation(params.location, descriptionFiltered);
    return locationFiltered;
}