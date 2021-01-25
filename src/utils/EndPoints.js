import { base_url } from "./Constants";


export default {
    signup: base_url + "/auth/signup",
    login: base_url + "/auth/login",
    confirmAccount: base_url + "/auth/confirm-account",
    resetPassword: base_url + "/auth/reset-password",
    resetPasswordVerify: base_url + "/auth/reset-password-verify",
};
