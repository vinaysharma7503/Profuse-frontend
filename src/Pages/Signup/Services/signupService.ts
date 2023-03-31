import { postReq } from "@RootService";

import apiEndPoints from "./apiEndPoints";

const {SIGNUP} = apiEndPoints

export const SignupData = async (data:any)=>{
    try {
        return await postReq(SIGNUP,data)
    } catch (error:any) {
        return error?.response
    }
}