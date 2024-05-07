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
            data: {},
            status: "bad"
        }

        await fetch(AUTH_API_URL + "users/", requestOptions)
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

        await fetch(AUTH_API_URL + "token", requestOptions)
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
            method: "GET",
            headers: {
                "Authorization": "Token " + token
            }
        };

        var res = {
            data: {},
            status: ""
        }

        await fetch(AUTH_API_URL + "checkAuth", requestOptions)
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
                "Authorization": "Token " + token
            }
        };

        var res = {
            data: {},
            status: ""
        }

        await fetch(AUTH_API_URL + "logout", requestOptions)
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