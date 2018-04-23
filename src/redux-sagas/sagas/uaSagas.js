import {put} from "redux-saga/effects"

import {loadDataUASuccess} from "../actions/actions"

function* getUA(axios) {
    const data = yield axios.get('http://httpbin.org/user-agent')
    yield put(loadDataUASuccess(data.data))
}

export default getUA