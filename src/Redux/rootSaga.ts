import { all } from "@redux-saga/core/effects";
import LoginSaga from "@Pages/Login/Saga";
import SignupSaga from "@Pages/Signup/Saga";

export default function* rootSaga() {
  yield all([
    ...LoginSaga,
     ...SignupSaga
    ]);
}
