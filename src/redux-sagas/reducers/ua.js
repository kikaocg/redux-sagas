const INITIAL_STATE = {
    data: [],
    isFetching: false,
    error: false
}

const ua = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOAD_DATA_UA_REQUEST':
            return {
                isFetching: true,
                data: [],
                error: false
            }
        case 'LOAD_DATA_UA_SUCCESS':
            return {
                isFetching: false,
                data: action.data,
                error: false
            }
        case 'LOAD_DATA_UA_ERROR':
            return {
                isFetching: false,
                data: [],
                error: true
            }
        default:
            return state
    }
}

export default ua