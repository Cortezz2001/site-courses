"use client"
import { Card, Button, Icon } from "@/UI/SUI";
import { UserService } from "@/service/authService/auth";
import { useRouter } from "next/navigation";



const ProfilePane: React.FC = () => {
    const router = useRouter()

    const ClickHandler = () => {
        const email = localStorage.getItem("email")
        if (email) {
            const res = UserService.userLogout(email)
            res.then(res => {
                console.log(res)
                if (res.status === "succesfully") {
                    localStorage.setItem("isAuth", JSON.stringify(false))
                    router.push("/")
                }
            })
        }
        else{
            throw new Error("Email not found in LocalStorage")
        }
    }

    const logoutButton = (
        <Button
            negative
            style={{
                backgroundColor: "#007397",
            }}
            onClick={ClickHandler}
        >
            <Icon name="sign-out" />
            Выйти из аккаунта
        </Button>
    );

    return (
        <Card
            fluid
            header="Пользователь"
            meta={`Зарегестрирован ${new Date().toLocaleDateString()}`}
            extra={logoutButton}
            style={{ boxShadow: "none" }}
        />
    );
};

export default ProfilePane;
