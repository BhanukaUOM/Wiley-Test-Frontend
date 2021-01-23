// layouts
import DefaultLayout from "./layouts/DefaultLayout";
import views from "./modules/views";

const routes = [
  {
    path: "/register",
    layout: DefaultLayout,
    exact: true,
    component: views.LoginView,
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
