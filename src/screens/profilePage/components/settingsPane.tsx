import {
    Button,
    Icon,
    Form,
    FormGroup,
    FormInput,
    Segment,
    Header,
} from "@/UI/SUI";

const SettingsPane: React.FC = () => {
    return (
        <>
            <Segment
                style={{
                    boxShadow: "0px 0px 5px 2px #e0e0e0",
                    marginBottom: "30px",
                }}
            >
                <Header as="h3">Изменение настроек</Header>
                <Form>
                    <FormGroup unstackable widths={2}>
                        <FormInput required label="Имя" placeholder="Имя" />
                        <FormInput
                            required
                            label="Фамилия"
                            placeholder="Фамилия"
                        />
                    </FormGroup>
                    <FormGroup widths={2}>
                        <FormInput
                            required
                            label="Имя пользователя"
                            icon={<Icon name="user" />}
                            iconPosition="left"
                            placeholder="Имя пользователя"
                        />
                        <FormInput
                            required
                            icon={<Icon name="at" />}
                            iconPosition="left"
                            label="E-mail"
                            placeholder="E-mail"
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        style={{
                            backgroundColor: "#007397",
                            color: "white",
                        }}
                    >
                        Сохранить настройки
                    </Button>
                </Form>
            </Segment>
            <Segment style={{ boxShadow: "0px 0px 5px 2px #e0e0e0" }}>
                <Form>
                    <Header as="h3">Смена пароля</Header>
                    <FormGroup widths={2}>
                        <FormInput
                            required
                            type="password"
                            icon={<Icon name="user secret" />}
                            iconPosition="left"
                            label="Новый пароль"
                            placeholder="Новый пароль"
                        />
                        <FormInput
                            required
                            type="password"
                            icon={<Icon name="user secret" />}
                            iconPosition="left"
                            label="Повторите новый пароль"
                            placeholder="Повторите новый пароль"
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        style={{
                            backgroundColor: "#007397",
                            color: "white",
                        }}
                    >
                        Сохранить пароль
                    </Button>
                </Form>
            </Segment>
        </>
    );
};

export default SettingsPane;
