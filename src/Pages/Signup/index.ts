import { connect } from "react-redux";
import Signup from "./Signup";
import { signupData } from "./Action/signupAction";

const mapStateToProps = (state:any)=>({
    SignupReducer:state?.SignupReducer
})

const mapDispatchToProps = (dispatch:any)=>({
    signupData:(payload:any)=> dispatch(signupData(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Signup)