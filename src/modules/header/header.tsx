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
        <Container name="header" fluid>
            <Menu
                name="mainheader"
                borderless
                attached="top"
                inverted
                //style={{ backgroundColor: "black" }}
            >
                <MenuItem position="left" name="logo">
                    <Link href="/">
                        <Image src="/logo.svg" size="tiny" />
                    </Link>
                </MenuItem>
                <MenuItem position="right">+77711739922</MenuItem>
                <MenuItem>
                    <Button basic inverted>
                        EN
                    </Button>
                    <Button basic inverted style={{ marginLeft: "10px" }}>
                        USD
                    </Button>
                    <Button basic inverted style={{ marginLeft: "20px" }}>
                        Личный кабинет
                    </Button>
                </MenuItem>
            </Menu>
            <Menu name="navbar" attached="bottom" secondary>
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
                        <Icon name="cart" />
                        Корзина
                    </Button>
                </MenuItem>
            </Menu>
        </Container>
    );
};
export default Header;
