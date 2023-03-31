import {fork} from 'redux-saga/effects'
import { watchMain } from './loginSaga'

export default [
    fork(watchMain)
]
