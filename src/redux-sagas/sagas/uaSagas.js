import {put, call} from "redux-saga/effects"

import {loadDataUASuccess} from "../actions/actions"

function* getUA(axios) {
    const data = yield call(axios.get, 'https://httpbin.org/user-agent')
    yield put(loadDataUASuccess(data.data['user-agent']))
}

export default getUA