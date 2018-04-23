import {put} from "redux-saga/effects"

import {loadDataSuccess} from "../actions/actions"

function* getIP(axios) {
    const data = yield axios.get('http://httpbin.org/ip')
    yield put(loadDataSuccess(data.data))
}

export default getIP