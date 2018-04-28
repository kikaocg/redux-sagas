import {put, call} from "redux-saga/effects"

import {loadDataSuccess} from "../actions/actions"

function* getIP(axios) {
    const data = yield call(axios.get, 'https://httpbin.org/ip')
    yield put(loadDataSuccess(data.data.origin))
}

export default getIP