import ConfirmAccount from "./auth/ConfirmAccount";
import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import ResetPasswordVerify from "./auth/ResetPasswordVerify";
import Dashboard from "./dashboard/Dashboard";


export default {
    LoginView: Login,
    RegistrationView: Registration,
    ForgotPasswordView: ForgotPassword,
    DashboardView: Dashboard,
    ConfirmAccountView: ConfirmAccount,
    ResetPasswordVerifyView: ResetPasswordVerify

}