import { Grid, GridColumn, GridRow, Image } from "@/UI/SUI";

const ImageBlock = () => {
    return (
        <Grid divided>
            <GridRow centered>
                <GridColumn centered>
                    <Image
                        rounded
                        alt=""
                        src="/notebook-with-code.jpeg"
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "600px",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <h2>НАЧНИТЕ КАРЬЕРУ CG-ХУДОЖНИКА</h2>
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
                    </div>
                </GridColumn>
            </GridRow>
        </Grid>
    );
};

export default ImageBlock;
