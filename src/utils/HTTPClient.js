import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Create axios instance for api calls
let instance = null;
const headers = {
    "Content-Type": "application/json",
};

export const setAuth = async () => {
    const token = localStorage.token;
    if (!!token) {
        headers["authorization"] = `Bearer ${token}`;
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
            return Promise.reject(error);
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
};
