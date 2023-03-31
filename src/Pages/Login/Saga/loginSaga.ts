// @ts-nocheck

import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_DATA,
  loginSuccessfully,
  loginFailed,
} from "../Action/loginAction";
import { LoginData } from "../Services/loginService";

function* postApiData(payload: any) {
  try {
    const result = yield call(LoginData, payload?.data);
    yield put(loginSuccessfully(result?.data));
  } catch (error) {
    loginFailed(error);
  }
}


export function* watchMain(){
    yield takeLatest(LOGIN_DATA, postApiData);
    }