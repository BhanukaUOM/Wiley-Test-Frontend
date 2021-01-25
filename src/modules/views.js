import ConfirmAccount from "./auth/ConfirmAccount";
import ForgotPassword from "./auth/ForgotPassword";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import ResetPasswordVerify from "./auth/ResetPasswordVerify";
import Dashboard from "./dashboard/Dashboard";


export default {
    SignInView: SignIn,
    SignUpView: SignUp,
    ForgotPasswordView: ForgotPassword,
    DashboardView: Dashboard,
    ConfirmAccountView: ConfirmAccount,
    ResetPasswordVerifyView: ResetPasswordVerify

}