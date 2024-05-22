import { Icon } from "@/UI/SUI";
import style from "../../style.module.css";

const ButtonMarker = () => {
    return (
        <div style={{ display: "grid", placeItems: "center" }}>
            <span className={style.profile_button_text}>Личный кабинет</span>
            <Icon name="user" className={style.profile_button_icon} />
        </div>
    );
};

export default ButtonMarker;
