import { getReq, patchReq, postReq } from "@RootService";

import apiEndPoints from "./apiEndPoints";

const {USERSLIST,SIGNUP} = apiEndPoints;

export const getUserListData = async (page:any,cb:any)=>{
    try {
        let url:any
        if (page) {
            url =`${USERSLIST}?page=${page}`
        }
        const result = await getReq(url)
        return cb(result)
    } catch (error:any) {
        return error?.response
    }
}

export const signupData = async (data:any,cb:any)=>{
    try {
        const result = await postReq(SIGNUP,data)
        return cb(result)
    } catch (error:any) {
        return error?.response
    }
}