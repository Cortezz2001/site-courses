import React, { useState } from "react";
import { Form, FormField, Input, Button, Container, Header } from "@/UI/SUI";
import { UserService } from "@/service/authService/auth";
import { useTranslations } from "next-intl";

interface LostPasswordFormProps {
    onCancelClick: () => void;
}

const LostPasswordForm: React.FC<LostPasswordFormProps> = ({
    onCancelClick,
}) => {
    const t = useTranslations("LostPassPage");
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
                boxShadow: "0px 0px 5px 2px #e0e0e0",
                borderRadius: "10px",
                padding: "30px",
                width: "400px",
            }}
        >
            <Header as="h3" textAlign="center">
                {t('recovery')}
            </Header>
            <Form onSubmit={submitHandler}>
                <FormField
                    required
                    label="Email"
                    placeholder={t('emailPlaceholder')}
                    control={Input}
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <Button
                    fluid
                    style={{
                        backgroundColor: "#007397",
                        color: "white",
                        marginTop: "20px",
                    }}
                    loading={loading}
                >
                    {t('resetBtn')}
                </Button>
                <Container
                    style={{
                        fontSize: "12px",
                        marginTop: "10px",
                        textAlign: "center",
                    }}
                >
                    <p>
                        {t('recall')}{" "}
                        <span
                            onClick={onCancelClick}
                            style={{ cursor: "pointer", color: "#007397" }}
                        >
                            {t('auth')}
                        </span>
                    </p>
                </Container>
            </Form>
        </Container>
    );
};

export default LostPasswordForm;
