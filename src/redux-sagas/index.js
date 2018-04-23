import {combineReducers} from 'redux'
import ip from './reducers/ip'
import ua from './reducers/ua'

export default combineReducers({ip, ua})