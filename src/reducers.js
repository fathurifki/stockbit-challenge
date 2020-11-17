import { combineReducers } from 'redux'
import DefaultReducer from './pages/DefaultPage/reducer'

const reducers = combineReducers({
    default: DefaultReducer 
})

export default reducers