import Link from "next/link";
import style from "./style.module.css";
import {
    Container,
    Menu,
    MenuItem,
    Image,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Button,
    Icon,
} from "@/UI/SUI";
const Header = () => {
    return (
        <Container
            name="header"
            fluid
            style={{ position: "sticky", top: "0", zIndex: "1000" }}
        >
            <Menu name="mainheader" borderless attached="top" inverted>
                <Container style={{ width: "1330px", margin: "auto" }}>
                    <MenuItem position="left" name="logo">
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                size="mini"
                                alt=""
                                style={{
                                    transform: "scale(1.5)",
                                    marginLeft: "20px",
                                }}
                            />
                        </Link>
                    </MenuItem>
                    <MenuItem position="right">+77051400124</MenuItem>
                    <MenuItem>
                        <Button inverted>EN</Button>
                        <Button inverted style={{ marginLeft: "10px" }}>
                            USD
                        </Button>
                        <Button inverted style={{ marginLeft: "20px" }}>
                            Личный кабинет
                        </Button>
                    </MenuItem>
                </Container>
            </Menu>
            <Menu name="navbar" attached="bottom" borderless>
                <Container style={{ width: "1330px", margin: "auto" }}>
                    <MenuItem name="professions">Профессии</MenuItem>

                    <MenuItem name="curators">Кураторы</MenuItem>

                    <MenuItem name="tostudents">Студентам</MenuItem>

                    <Dropdown text="dropdown" pointing className="link item">
                        <DropdownMenu>
                            <DropdownItem>Вкладка 1</DropdownItem>
                            <DropdownItem>Вкладка 2</DropdownItem>
                            <DropdownItem>Вкладка 3</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <MenuItem position="right">
                        <Button
                            style={{ padding: "8px", margin: "-12px" }}
                            color="black"
                            circular
                            icon="telegram plane"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            style={{ padding: "8px", margin: "-12px" }}
                            color="black"
                            circular
                            icon="vk"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            style={{ padding: "8px", margin: "-12px" }}
                            color="black"
                            circular
                            icon="youtube"
                        />
                    </MenuItem>
                    <MenuItem>
                        <Button
                            color="black"
                            circular
                            icon
                            labelPosition="left"
                            style={{ marginLeft: "20px" }}
                        >
                            <Icon name="cart" style={{ padding: "10px" }} />
                            Корзина
                        </Button>
                    </MenuItem>
                </Container>
            </Menu>
        </Container>
    );
};
export default Header;
