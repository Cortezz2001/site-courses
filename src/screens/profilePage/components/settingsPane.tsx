import {
    Button,
    Icon,
    Form,
    FormGroup,
    FormInput,
    Segment,
    Header,
} from "@/UI/SUI";
import { useTranslations } from "next-intl";

const SettingsPane: React.FC = () => {
    const t = useTranslations("Profile.Settings");
    return (
        <>
            <Segment
                style={{
                    boxShadow: "0px 0px 5px 2px #e0e0e0",
                    marginBottom: "30px",
                }}
            >
                <Header as="h3">{t('changeSettings')}</Header>
                <Form>
                    <FormGroup unstackable widths={2}>
                        <FormInput required label={t('nameLabel')} placeholder={t('namePlaceholder')} />
                        <FormInput
                            required
                            label={t('secondNameLabel')}
                            placeholder={t('secondNamePlaceholder')}
                        />
                    </FormGroup>
                    <FormGroup widths={2}>
                        <FormInput
                            required
                            label={t('usernameLabel')}
                            icon={<Icon name="user" />}
                            iconPosition="left"
                            placeholder={t('usernamePlaceholder')}
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
                        {t('saveChanges')}
                    </Button>
                </Form>
            </Segment>
            <Segment style={{ boxShadow: "0px 0px 5px 2px #e0e0e0" }}>
                <Form>
                    <Header as="h3">{t('passwordChange')}</Header>
                    <FormGroup widths={2}>
                        <FormInput
                            required
                            type="password"
                            icon={<Icon name="user secret" />}
                            iconPosition="left"
                            label={t('newPasswordLabel')}
                            placeholder={t('newPasswordPlaceholder')}
                        />
                        <FormInput
                            required
                            type="password"
                            icon={<Icon name="user secret" />}
                            iconPosition="left"
                            label={t('repeatNewPasswordLabel')}
                            placeholder={t('repeatNewPasswordPlaceholder')}
                        />
                    </FormGroup>
                    <Button
                        type="submit"
                        style={{
                            backgroundColor: "#007397",
                            color: "white",
                        }}
                    >
                        {t('savePassword')}
                    </Button>
                </Form>
            </Segment>
        </>
    );
};

export default SettingsPane;
