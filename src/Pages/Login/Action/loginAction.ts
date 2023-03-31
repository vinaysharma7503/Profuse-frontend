export const LOGIN_DATA = 'LOGIN_DATA'
export const LOGIN_DATA_SUCCESS = 'LOGIN_DATA_SUCCESS'
export const LOGIN_DATA_FAIL = 'LOGIN_DATA_FAIL'

export const loginData=(data:any)=>{
    return {
        type:LOGIN_DATA,
        data:data
        }
};

export const loginSuccessfully=(data:any)=>{
    return {
        type:LOGIN_DATA_SUCCESS,
        data:data
        }
};

export const loginFailed=(data:any)=>{
    return {
        type:LOGIN_DATA_FAIL,
        data:data
        }
};

