import ConfirmAccount from "./auth/ConfirmAccount";
import ForgotPassword from "./auth/ForgotPassword";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import ResetPasswordVerify from "./auth/ResetPasswordVerify";
import Dashboard from "./dashboard/Dashboard";
import NotFoundPage from "../components/notFoundPage/NotFoundPage";
import Home from "./home/Home";


export default {
    LoginView: Login,
    SignUpView: SignUp,
    ForgotPasswordView: ForgotPassword,
    DashboardView: Dashboard,
    ConfirmAccountView: ConfirmAccount,
    ResetPasswordVerifyView: ResetPasswordVerify,
    NotFoundPageView: NotFoundPage,
    HomeView: Home
}