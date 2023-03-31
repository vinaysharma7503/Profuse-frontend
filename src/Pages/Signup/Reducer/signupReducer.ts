import { SIGNUP_DATA,SIGNUP_DATA_SUCCESS,SIGNUP_DATA_FAIL } from "../Action/signupAction";

const initialState = {
    userInfo:{
        isLoading:false,
        data:null,
        error:null,
        isAuth:false
    }
}

const reducer = (state=initialState,payload:any)=>{
    const {type='',data=null} = payload

    switch (type) {
        case SIGNUP_DATA:
            
            return{
                ...state,
                userInfo:{
                    isLoading:true,
                    data:null,
                    error:null,
                    isAuth:false
                }
            }
        case SIGNUP_DATA_SUCCESS:
            
            return{
                ...state,
                userInfo:{
                    isLoading:false,
                    data:data,
                    error:null,
                    isAuth:true
                }
            }
        case SIGNUP_DATA_FAIL:
            
            return{
                ...state,
                userInfo:{
                    isLoading:false,
                    data:null,
                    error:data,
                    isAuth:false
                }
            }
    
        default:
            return state;
    }
}

export default reducer