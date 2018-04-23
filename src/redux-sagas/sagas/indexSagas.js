import {takeLatest} from "redux-saga/es/effects" //takeEvery -> every click
import getIP from './ipSagas'
import getUA from './uaSagas'
import axios from "axios"

function* indexSagas() {
    console.log('Running saga...')
    yield [
        takeLatest('LOAD_DATA_REQUEST', getIP, axios),
        takeLatest('LOAD_DATA_UA_REQUEST', getUA, axios)
    ]
}

export default indexSagas