const FormData = require('form-data');

interface IUserReegistrationRequest {
    username: string,
    email: string
    id: number
}

interface IUserAuthRequest {
    token: string
}

export const AUTH_API_URL = "http://127.0.0.1:8000/api/v1/auth/";


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
            status: "",
            data: {}
        }

        const response = await fetch(AUTH_API_URL + "users/", requestOptions)

        if (response.ok) {
            let json = await response.json();
            res.status = "ok"
            res.data = json
        }
        else {
            let data = await response.json();
            res.status = "bad"
            res.data = data
        }
        return res as { status: string, data: any }
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
            status: "",
            data: {},
        }

        let response = await fetch(AUTH_API_URL + "token", requestOptions)
        if (response.ok) {
            let json = await response.json();
            res.status = "ok"
            res.data = json
        }
        else {
            let data = await response.json();
            res.status = "bad"
            res.data = data
        }
        return res as { status: string, data: any }

    },

    async userAuthCheck(token: string) {

        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": "Token " + token
            }
        };

        var res = {
            data: {},
            status: ""
        }

        let response = await fetch(AUTH_API_URL + "checkAuth", requestOptions)
        if (response.ok) {
            let json = await response.json();
            res.status = "ok"
            res.data = json
        }
        else {
            let data = await response.json();
            res.status = "bad"
            res.data = data
        }
        return res as { status: string, data: any }
    },
    async userLogout(token: string) {

        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": "Token " + token
            }
        };

        var res = {
            data: {},
            status: ""
        }

        let response = await fetch(AUTH_API_URL + "logout", requestOptions)
        if (response.ok) {
            let json = await response.json();
            res.status = "ok"
            res.data = json
        }
        else {
            let data = await response.json();
            res.status = "bad"
            res.data = data
        }
        return res as { status: string, data: any }

    },
}