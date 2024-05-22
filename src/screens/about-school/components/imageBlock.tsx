import { Image } from "@/UI/SUI";
import style from "../style.module.css";

const ImageBlock: React.FC = () => {
    return (
        <>
            <Image
                rounded
                alt=""
                src="/it-school-stock.jpg"
                className={style.hero_banner}
            />
        </>
    );
};

export default ImageBlock;
