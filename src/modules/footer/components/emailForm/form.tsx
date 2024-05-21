"use client";
import { MessagesService } from "@/service/postMessageService/service";
import { useState } from "react";
import { Form, FormField, Input, Button, FormCheckbox } from "@/UI/SUI";
import MessageModal from "./modal";
import { useTranslations } from "next-intl";

const MessageForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const t = useTranslations("Footer");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (!email) {
                setErrorMessage(t('emailError'));
            } else if (!isChecked) {
                setErrorMessage(
                    t('checkboxError')
                );
            } else {
                await MessagesService.sendMessage({ email });
                console.log("Сообщение отправлено");
                setModalOpen(true);
                setEmail("");
                setIsChecked(false);
                setErrorMessage("");
            }
        } catch (error) {
            console.error("Ошибка отправки", error);
            setErrorMessage(t('error'));
        }
    };

    return (
        <>
            <p style={{ color: "white" }}>
                {t('formTitle')}
            </p>
            <Form
                inverted
                style={{ width: "fit-content" }}
                onSubmit={handleSubmit}
            >
                <FormField
                    required
                    control={Input}
                    placeholder="E-mail"
                    type="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setEmail(e.target.value)
                    }
                />
                <Button fluid inverted type="submit">
                    {t('send')}
                </Button>
                <FormCheckbox
                    label={t('checkbox')}
                    style={{ marginTop: "10px", fontSize: "12px" }}
                    checked={isChecked}
                    onChange={(e, data) => setIsChecked(data.checked || false)}
                />
            </Form>
            {errorMessage && (
                <p
                    style={{
                        color: "red",
                        textAlign: "center",
                        marginTop: "10px",
                    }}
                >
                    {errorMessage}
                </p>
            )}
            <MessageModal
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
};

export default MessageForm;
