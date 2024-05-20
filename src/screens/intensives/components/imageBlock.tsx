import { Container, Grid, GridColumn, Image } from "@/UI/SUI";
import style from "../style.module.css";

const ImageBlock = () => {
    return (
        <>
            <Grid divided className={style.banner}>
                <GridColumn centered>
                    <Image
                        rounded
                        alt=""
                        src="/notebook-with-code.jpeg"
                        className={style.banner_image}
                    />
                    <Container className={style.banner_text}>
                        <h2>НАЧНИТЕ КАРЬЕРУ ПРОГРАММИСТА</h2>
                        <p>С 5 по 10 августа 2024</p>
                        <p>
                            Это 6 дней офлайн и онлайн практики, насыщенная
                            программа, концентрация на одной теме и готовый
                            проект в конце
                        </p>
                        <p>
                            А еще — возможность попробовать понравившийся курс и
                            записаться на обучение, а также получить скидку на
                            покупку любого курса длительностью 5,5 месяцев (мы
                            дарим скидку после прохождения интенсива в размере
                            стоимости интенсива)
                        </p>
                        <p>Количество мест ограничено!</p>
                    </Container>
                </GridColumn>
            </Grid>
        </>
    );
};

export default ImageBlock;
