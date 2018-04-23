import React, {Component} from 'react'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './redux-sagas/index'

import Info from './components/Info.js'
import UserAgent from "./components/UserAgent"
import indexSaga from './redux-sagas/sagas/indexSagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(indexSaga)

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Info/>
                    <UserAgent/>
                </div>
            </Provider>
        )
    }
}

export default App
