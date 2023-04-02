import { getReq, patchReq } from "@RootService";

import apiEndPoints from "./apiEndPoints";

const {USERPROFILE,UPDATEUSERPROFILE} = apiEndPoints;

export const getUserProfileData = async (cb:any)=>{
    try {
        const result = await getReq(USERPROFILE)
        return cb(result)
    } catch (error:any) {
        return error?.response
    }
}
export const updateUserProfileData = async (data:any,cb:any)=>{
    try {
        const result = await patchReq(UPDATEUSERPROFILE,data)
        return cb(result)
    } catch (error:any) {
        return error?.response
    }
}