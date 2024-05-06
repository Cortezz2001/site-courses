import { Button, Icon, Popup } from "@/UI/SUI";
import { ISelectedCoursesInfoGroup } from "@/service/cartService/types";
import CartContent from "./cartContent";

const CartButton: React.FC<ISelectedCoursesInfoGroup> = ({
    selectedCourses,
}) => {
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
                    Корзина
                </Button>
            }
            content={<CartContent selectedCourses={selectedCourses} />}
            on="click"
            position="bottom right"
        />
    );
};

export default CartButton;
