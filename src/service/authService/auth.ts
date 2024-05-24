import { API_URL } from "../consts";

const FormData = require("form-data");

export enum STATUS {
    OK,
    BAD,
}

interface IResponseHandler {
    status: STATUS;
    data: any;
}

async function responseHandler(response: Response): Promise<IResponseHandler> {
    return {
        status: response.ok ? STATUS.OK : STATUS.BAD,
        data: await response.json(),
    };
}

export const AUTH_API_URL = API_URL + "/api/v1/auth/";
export const UserService = {
    async userRegistration(
        email: string,
        password: string,
        firstname: string,
        lastname: string
    ) {
        let data = new FormData();
        data.append("username", email);
        data.append("password", password);
        data.append("email", email);
        data.append("first_name", firstname);
        data.append("last_name", lastname);

        const requestOptions = {
            method: "POST",
            body: data,
        };

        const response = await fetch(AUTH_API_URL + "users/", requestOptions);
        let res = await responseHandler(response);
        return res;
    },

    async userAuth(email: string, password: string) {
        const formdata = new FormData();
        formdata.append("username", email);
        formdata.append("password", password);

        const requestOptions = {
            method: "POST",
            body: formdata,
        };

        let response = await fetch(AUTH_API_URL + "token", requestOptions);
        let res = await responseHandler(response);
        return res;
    },

    async userAuthCheck(token: string): Promise<boolean> {
        const requestOptions = {
            method: "GET",
            headers: {
                Authorization: "Token " + token,
            },
        };

        let response = await fetch(AUTH_API_URL + "checkAuth", requestOptions);
        let res = await responseHandler(response);
        return res.status === STATUS.OK;
    },
    async userLogout(token: string) {
        const requestOptions = {
            method: "GET",
            headers: {
                Authorization: "Token " + token,
            },
        };

        let response = await fetch(AUTH_API_URL + "logout", requestOptions);
        let res = await responseHandler(response);
        return res;
    },
};
