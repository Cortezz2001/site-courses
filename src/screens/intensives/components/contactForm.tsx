"use client";
import {
    Button,
    Checkbox,
    Form,
    FormField,
    Grid,
    GridColumn,
    Header,
    Input,
    Select,
} from "@/UI/SUI";
import MessageModal from "@/modules/footer/components/emailForm/modal";
import { MessagesService } from "@/service/postMessageService/service";
import { useTranslations } from "next-intl";
import { useState } from "react";

const ContactForm = () => {
    const t = useTranslations("IntensivesPage.Form");
    const options = [
        { key: "telegram", text: "Telegram", value: "telegram" },
        { key: "whatsapp", text: "WhatsApp", value: "whatsapp" },
    ];
    const [name, setName] = useState("");
    const [number, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [messenger, setMessenger] = useState("");
    const [messenger_username, setUsername] = useState("");
    const [isChecked, setIsChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (
                !name ||
                !number ||
                !email ||
                !messenger ||
                !messenger_username
            ) {
                setErrorMessage("Пожалуйста, заполните все поля формы.");
            } else if (!isChecked) {
                setErrorMessage(
                    "Пожалуйста, подтвердите согласие на обработку персональных данных."
                );
            } else {
                await MessagesService.sendMessage({
                    name,
                    number,
                    email,
                    messenger,
                    messenger_username,
                });
                console.log("Сообщение отправлено");
                setModalOpen(true);
                setName("");
                setPhone("");
                setEmail("");
                setMessenger("");
                setUsername("");
                setIsChecked(false);
                setErrorMessage("");
            }
        } catch (error) {
            console.error("Ошибка отправки", error);
            setErrorMessage("Ошибка отправки. Попробуйте еще раз");
        }
    };
    return (
        <>
            <Grid
                columns={2}
                centered
                divided
                stackable
                style={{
                    boxShadow: "1px 1px 20px 10px #e0e0e0",
                    borderRadius: "10px",
                    padding: "20px",
                    margin: "auto",
                    marginLeft: "0",
                    marginRight: "0",
                    marginTop: "30px",
                }}
            >
                <GridColumn verticalAlign="middle">
                    <Header
                        as="h2"
                        textAlign="center"
                        style={{ marginBottom: "30px" }}
                    >
                        {t('title')}
                    </Header>
                    <p style={{ textAlign: "center" }}>
                        {t('desc')}
                    </p>
                </GridColumn>
                <GridColumn>
                    <Form style={{ margin: "20px" }} onSubmit={handleSubmit}>
                        <FormField
                            required
                            type="text"
                            control={Input}
                            label={t('nameLabel')}
                            placeholder={t('namePlaceholder')}
                            value={name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setName(e.target.value)}
                        />
                        <FormField
                            required
                            type="tel"
                            control={Input}
                            label={t('phoneLabel')}
                            placeholder={t('phonePlaceholder')}
                            value={number}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setPhone(e.target.value)}
                        />
                        <FormField
                            required
                            type="email"
                            control={Input}
                            label={t('emailLabel')}
                            placeholder={t('emailPlaceholder')}
                            value={email}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setEmail(e.target.value)}
                        />
                        <FormField
                            required
                            control={Select}
                            type="text"
                            label={t('messengerLabel')}
                            options={options}
                            placeholder={t('messengerPlaceholder')}
                            value={messenger}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>,
                                data: any
                            ) => setMessenger(data.value as string)}
                        />
                        <FormField
                            required
                            control={Input}
                            type="text"
                            label="@username"
                            placeholder={t('usernamePlaceholder')}
                            value={messenger_username}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setUsername(e.target.value)}
                        />
                        <FormField>
                            <Checkbox
                                label={t('checkbox')}
                                checked={isChecked}
                                onChange={(e, data) =>
                                    setIsChecked(data.checked || false)
                                }
                            />
                        </FormField>
                        <Button
                            type="submit"
                            style={{
                                backgroundColor: "#007397",
                                color: "white",
                            }}
                            fluid
                        >
                            {t('send')}
                        </Button>
                    </Form>
                    {errorMessage && (
                        <p style={{ color: "red", textAlign: "center" }}>
                            {errorMessage}
                        </p>
                    )}
                    <MessageModal
                        open={modalOpen}
                        onClose={() => setModalOpen(false)}
                    />
                </GridColumn>
            </Grid>
        </>
    );
};

export default ContactForm;
