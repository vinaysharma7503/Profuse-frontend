import { postReq } from "@RootService";

import apiEndPoints from "./apiEndPoints";

const {LOGIN} = apiEndPoints;

export const LoginData = async (data:any)=>{
    try {
        return await postReq(LOGIN,data)
    } catch (error:any) {
        return error?.response
    }
}