import { Card, Button, Icon } from "@/UI/SUI";

const extra = (
    <Button
        negative
        style={{
            backgroundColor: "#007397",
        }}
    >
        <Icon name="sign-out" />
        Выйти из аккаунта
    </Button>
);

const ProfilePane: React.FC = () => {
    return (
        <Card
            fluid
            header="Пользователь"
            meta={`Зарегестрирован ${new Date().toLocaleDateString()}`}
            extra={extra}
            style={{ boxShadow: "none" }}
        />
    );
};

export default ProfilePane;
