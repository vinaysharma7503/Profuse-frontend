export const SIGNUP_DATA = 'SIGNUP_DATA';
export const SIGNUP_DATA_SUCCESS='SIGNUP_DATA_SUCCESS';
export const SIGNUP_DATA_FAIL='SIGNUP_DATA_FAIL';

export const signupData=(data:any)=>{
    return {
        type:SIGNUP_DATA,
        data:data
    }
}
export const signupSuccessfully=(data:any)=>{
    return {
        type:SIGNUP_DATA_SUCCESS,
        data:data
    }
}
export const signupFailed=(data:any)=>{
    return {
        type:SIGNUP_DATA_FAIL,
        data:data
    }
}