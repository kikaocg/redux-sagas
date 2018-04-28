import sagaHelper from 'redux-saga-testing'
import ipSagas from '../redux-sagas/sagas/ipSagas'
import {call, put} from 'redux-saga/effects'

import {loadDataSuccess} from '../redux-sagas/actions/actions'

describe('should test ipSagas', () => {
    const axiosMock = {
        get: jest.fn()
    }

    const it = sagaHelper(ipSagas(axiosMock))
    it('should call api get', result => {
        expect(result).toEqual(call(axiosMock.get, 'https://httpbin.org/ip'))
        return {
            data: {
                origin: 'ip retornado'
            }
        }
    })
    it('should put loadDataSuccess', result => {
        expect(result).toEqual(put(loadDataSuccess('ip retornado')))
    })
})

