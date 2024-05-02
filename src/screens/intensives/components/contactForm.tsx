import {
    Button,
    Checkbox,
    Container,
    Form,
    FormField,
    Grid,
    GridColumn,
    Header,
    Input,
    Select,
} from "@/UI/SUI";

const ContactForm = () => {
    const options = [
        { key: "telegram", text: "Telegram", value: "telegram" },
        { key: "whatsapp", text: "WhatsApp", value: "whatsapp" },
    ];

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
                        Помочь подобрать обучение?
                    </Header>
                    <p style={{ textAlign: "center" }}>
                        Если у вас остались вопросы или хотите уточнить любую
                        информацию, то можете заполнить форму и мы с вами
                        свяжемся.
                    </p>
                </GridColumn>
                <GridColumn>
                    <Form style={{ margin: "20px" }}>
                        <FormField
                            required
                            control={Input}
                            label="Имя"
                            placeholder="Введите ваше имя..."
                        />
                        <FormField
                            required
                            control={Input}
                            label="Номер телефона"
                            placeholder="Введите ваш номер телефона..."
                        />
                        <FormField
                            required
                            control={Input}
                            label="Электронная почта"
                            placeholder="Введите вашу электронную почту..."
                        />
                        <FormField
                            required
                            control={Select}
                            label="Предпочитаемый мессенджер"
                            options={options}
                            placeholder="Выберите мессенджер..."
                        />
                        <FormField
                            required
                            control={Input}
                            label="@username"
                            placeholder="Введите ваш username..."
                        />
                        <FormField>
                            <Checkbox label="Нажимая на кнопку, я соглашаюсь на обработку персональных данных" />
                        </FormField>
                        <Button
                            type="submit"
                            style={{
                                backgroundColor: "#007397",
                                color: "white",
                            }}
                            fluid
                        >
                            Отправить
                        </Button>
                    </Form>
                </GridColumn>
            </Grid>
        </>
    );
};

export default ContactForm;
