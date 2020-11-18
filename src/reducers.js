import { combineReducers } from 'redux'
import DefaultReducer from './modules/DefaultPage/reducer'

const reducers = combineReducers({
    default: DefaultReducer 
})

export default reducers