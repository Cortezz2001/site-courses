import { headers } from "next/headers";

const axios = require('axios');
const FormData = require('form-data');

interface IUserReegistrationRequest {
    username: string,
    email: string
    id: number
}

interface IUserAuthRequest {
    token: string
}


export const UserService = {
    async userRegistration(
        username: string,
        email: string,
        password: string
    ) {
        let data = new FormData();
        data.append('username', email);
        data.append('password', password);
        data.append('email', email);

        const requestOptions = {
            method: "POST",
            body: data,
        };

        let res = {
            data: {},
            status: "bad"
        }

        await fetch("http://127.0.0.1:8000/api/auth/users/", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                res.data = JSON.parse(result)
                res.status = "ok"
            }
            )
            .catch((error) => { throw new Error(error) });
        return res as { data: IUserReegistrationRequest, status: string };
    },

    async userAuth(email: string, password: string) {
        const formdata = new FormData();
        formdata.append("username", email);
        formdata.append("password", password);

        const requestOptions = {
            method: "POST",
            body: formdata,
        };

        var res = {
            data: {},
            status: ""
        }

        await fetch("http://127.0.0.1:8000/api/auth/token", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                res.data = JSON.parse(result)
                res.status = "ok"
            }
            )
            .catch((error) => { throw new Error(error) });

        return res as { data: IUserAuthRequest, status: string };
    },

    async userAuthCheck(token: string) {

        const requestOptions = {
            method: "POST",
            headers: {
                token: "Token " + token
            }
        };

        var res = {
            data: {},
            status: ""
        }

        await fetch("http://127.0.0.1:8000/api/auth/checkAuth", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                res.data = JSON.parse(result)
                res.status = "ok"
            }
            )
            .catch((error) => { throw new Error(error) });

        return res as { data: { status: string }, status: string };
    },
    async userLogout(token: string) {

        const requestOptions = {
            method: "GET",
            headers: {
                token: "Token " + token
            }
        };

        var res = {
            data: {},
            status: ""
        }

        await fetch("http://127.0.0.1:8000/api/auth/logout", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                res.data = JSON.parse(result)
                res.status = "ok"
            }
            )
            .catch((error) => { throw new Error(error) });

        return res as { data: { status: string }, status: string };
    },
}