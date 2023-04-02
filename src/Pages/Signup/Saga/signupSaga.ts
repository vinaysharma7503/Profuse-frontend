// @ts-nocheck

import {call, put, takeLatest} from 'redux-saga/effects'

import { SIGNUP_DATA,signupSuccessfully,signupFailed } from '../Action/signupAction'
import { SignupData } from '../Services/signupService'

function* postApiData(payload:any){
    try {
        const result = yield call(SignupData,payload?.data);
        yield put(signupSuccessfully(result?.data))
    } catch (error) {
        console.log(error,'check');
        
        signupFailed(error)
    }
}

export function* watchMain(){
    yield takeLatest(SIGNUP_DATA,postApiData);
}