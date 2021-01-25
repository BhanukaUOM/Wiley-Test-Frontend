// layouts
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import DefaultLayout from "./layouts/DefaultLayout";
import views from "./modules/views";

let authUser = false

const routes = [
  {
    path: "/confirm-account",
    layout: DefaultLayout,
    exact: true,
    authUser: authUser,
    component: views.ConfirmAccountView,
  },
  {
    path: "/forgot-password",
    layout: AuthLayout,
    exact: true,
    authUser: authUser,
    component: views.ForgotPasswordView,
  },
  {
    path: "/dashboard",
    layout: DashboardLayout,
    exact: true,
    authUser: authUser,
    component: views.DashboardView,
  },
  {
    path: "/register",
    layout: AuthLayout,
    exact: true,
    authUser: authUser,
    component: views.RegistrationView,
  },
  {
    path: "/reset-password-verify",
    layout: AuthLayout,
    exact: true,
    authUser: authUser,
    component: views.ResetPasswordVerifyView,
  },
  {
    path: "/login",
    layout: AuthLayout,
    exact: true,
    authUser: authUser,
    component: views.LoginView,
  },



  //   //should be last one
  //   {
  //     layout: DefaultLayout,
  //     component: Views.PageNotFoundView,
  //   },
];

export default routes;
