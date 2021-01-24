// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import views from "./modules/views";

const routes = [
  {
    path: "/confirm-account",
    layout: DefaultLayout,
    exact: true,
    component: views.ConfirmAccountView,
  },
  {
    path: "/forgot-password",
    layout: DefaultLayout,
    exact: true,
    component: views.ForgotPasswordView,
  },
  {
    path: "/dashboard",
    layout: DefaultLayout,
    exact: true,
    component: views.DashboardView,
  },
  {
    path: "/register",
    layout: DefaultLayout,
    exact: true,
    component: views.RegistrationView,
  },
  {
    path: "/login",
    layout: DefaultLayout,
    exact: true,
    component: views.LoginView,
  },


  //   //should be last one
  //   {
  //     layout: DefaultLayout,
  //     component: Views.PageNotFoundView,
  //   },
];

export default routes;
