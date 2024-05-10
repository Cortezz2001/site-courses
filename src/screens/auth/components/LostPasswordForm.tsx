import React, { useState } from "react";
import { Form, FormField, Input, Button, Container, Header } from "@/UI/SUI";
import { UserService } from "@/service/authService/auth";

interface LostPasswordFormProps {
    onCancelClick: () => void;
}

const LostPasswordForm: React.FC<LostPasswordFormProps> = ({
    onCancelClick,
}) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const submitHandler = () => {
        setLoading(true);
        // const res = UserService.userLostPass(email);
        // res.then((res) => {
        //     console.log(res);
        //     if (res.status === "succesfully") {
        //         localStorage.setItem("email", email);
        //         router.push("/profile");
        //     }
        // });
        setLoading(false);
    };

    return (
        <Container
            style={{
                boxShadow: "0px 0px 5px 2px #007397",
                borderRadius: "10px",
                padding: "30px",
                width: "400px",
            }}
        >
            <Header as="h3" textAlign="center">
                Восстановление пароля
            </Header>
            <Form>
                <FormField>
                    <label>Email</label>
                    <Input
                        placeholder="Введите вашу почту"
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                </FormField>
                <Button
                    type="submit"
                    fluid
                    style={{
                        backgroundColor: "#007397",
                        color: "white",
                        marginTop: "20px",
                    }}
                    onClick={submitHandler}
                    loading={loading}
                >
                    Сбросить пароль
                </Button>
                <Container
                    style={{
                        fontSize: "12px",
                        marginTop: "10px",
                        textAlign: "center",
                    }}
                >
                    <p>
                        Вспомнили пароль?{" "}
                        <span
                            onClick={onCancelClick}
                            style={{ cursor: "pointer", color: "#007397" }}
                        >
                            Войти
                        </span>
                    </p>
                </Container>
            </Form>
        </Container>
    );
};

export default LostPasswordForm;
