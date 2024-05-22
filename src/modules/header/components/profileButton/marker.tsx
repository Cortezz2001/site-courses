import { Icon } from "@/UI/SUI";
import { useTranslations } from "next-intl";
import style from "../../style.module.css";

const ButtonMarker = () => {
    const t = useTranslations("Header");
    return (
        <div style={{ display: "grid", placeItems: "center" }}>
            <span className={style.profile_button_text}>{t("account")}</span>
            <Icon name="user" className={style.profile_button_icon} />
        </div>
    );
};

export default ButtonMarker;
