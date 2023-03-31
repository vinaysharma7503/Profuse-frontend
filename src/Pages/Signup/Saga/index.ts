import {fork} from 'redux-saga/effects'
import {watchMain} from './signupSaga'

export default [
    fork(watchMain)
]