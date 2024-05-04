interface Ires {
    status: string;
    errors: string;
}

export const UserService = {
    async userRegistration(
        firstname: string,
        lastname: string,
        password: string,
        email: string
    ) {
        let userData = {
            firstname,
            lastname,
            password,
            email,
        };
        const res = await fetch(
            "http://127.0.0.1:8000/" + "api/v1/auth/user_registration",
            {
                method: "POST",
                body: JSON.stringify(userData),
            }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return (await res.json()) as Promise<Ires>;
    },

    async userAuth(password: string, email: string) {
        let userData = {
            password,
            email,
        };
        const res = await fetch(
            "http://127.0.0.1:8000/" + "api/v1/auth/user_authentification",
            {
                method: "POST",
                body: JSON.stringify(userData),
            }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return (await res.json()) as Promise<Ires>;
    },

    async userAuthCheck(email: string) {
        let userData = {
            email,
        };
        const res = await fetch(
            "http://127.0.0.1:8000/" +
                "api/v1/auth/check_user_authentification",
            {
                method: "POST",
                body: JSON.stringify(userData),
            }
        );
        if (!res.ok) {
            throw new Error("Failed to fetch data");
        }
        return (await res.json()) as Promise<Ires>;
    },
}
