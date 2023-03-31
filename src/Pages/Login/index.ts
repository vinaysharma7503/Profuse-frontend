import { connect } from "react-redux";
import Login from "./Login";
import { loginData } from "./Action/loginAction";

const mapStateToProps = (state:any)=>({
    LoginReducer:state?.LoginReducer
})

const mapDispatchToProps = (dispatch:any)=>({
    loginData:(payload:any)=> dispatch(loginData(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)