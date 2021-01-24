import axios from "axios";
import { NotificationManager } from "react-notifications";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Create axios instance for api calls
let instance = null;
const headers = {
    "Content-Type": "application/json",
};

export const setAuth = async () => {
    const idToken = "dgddfgfdgfdgf";
    if (!!idToken) {
        headers["authorization"] = `Bearer ${idToken}`;
    }

    instance = axios.create({
        baseURL: "",
        timeout: 120000,
        headers: headers,
    });

    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            // debugger
            console.log("🚀 ~ file: HTTPClient.js ~ line 100 ~ setAuth ~ error", error)
            console.log("HTTPClient error", error.response)
            if (
                error.response && error.response.status !== undefined &&
                error.response.status === 401
            ) {
                NotificationManager.error("Please log again", "Unauthorized");

                localStorage.clear();
                clearHTTPClient()
                window.location = "/login";
            }
            else {
                return Promise.reject(error);
            }
        }
    );
};

export const clearHTTPClient = () => {
    instance = null;
}

export default {
    Get: async (route, data) => {
        // debugger;
        instance || (await setAuth());
        return instance.get(route, data === {} ? null : JSON.stringify(data));
    },
    Post: async (route, data) => {
        // debugger;
        instance || (await setAuth());
        return instance.post(route, JSON.stringify(data));
    },
    Put: async (route, data) => {
        instance || (await setAuth());
        return instance.put(route, JSON.stringify(data));
    },
    Delete: async (route, data) => {
        instance || (await setAuth());
        return instance.delete(route, { data: data });
    },
    Patch: async (route, data) => {
        instance || (await setAuth());
        return instance.patch(route, JSON.stringify(data));
    },
    Download: async (route, data) => {
        return axios
            .create({
                baseURL: "",
                timeout: 30000,
                // headers: {
                //   authorization: `${localStorage.token}`,
                // },
            })
            .get(route, data === {} ? null : JSON.stringify(data));
    },
};
