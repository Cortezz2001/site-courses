import { Button, Icon, Popup } from "@/UI/SUI";
import { ISelectedCoursesInfoGroup } from "@/service/cartService/types";
import CartContent from "./cartContent";
import { useTranslations } from "next-intl";

const CartButton: React.FC<ISelectedCoursesInfoGroup> = ({
    selectedCourses,
}) => {
    const t = useTranslations("Header");
    return (
        <Popup
            trigger={
                <Button
                    color="black"
                    circular
                    icon
                    labelPosition="left"
                    style={{
                        marginLeft: "20px",
                        backgroundColor: "#007397",
                        color: "white",
                    }}
                >
                    <Icon
                        name="cart"
                        style={{
                            backgroundColor: "#007397",
                            padding: "10px",
                        }}
                    />
                    {t('cart')}
                </Button>
            }
            content={<CartContent selectedCourses={selectedCourses} />}
            on="click"
            position="bottom right"
        />
    );
};

export default CartButton;
