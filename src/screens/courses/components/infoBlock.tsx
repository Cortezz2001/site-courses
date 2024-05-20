import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";
import style from "../style.module.css";

const InfoBlock: React.FC = () => {
    return (
        <>
            <Header as="h2" className={style.info_block_heading}>
                Обучение программированию
            </Header>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn className={style.info_block_left}>
                        <Image
                            rounded
                            alt=""
                            src="/programmers-stock.png"
                            className={style.info_block_image}
                        />
                    </GridColumn>
                    <GridColumn
                        verticalAlign="middle"
                        className={style.info_block_right}
                    >
                        <Container textAlign="justified">
                            <p>
                                У нас, в школе программирования для взрослых
                                LION IT-SCHOOL, все серьезно: здесь можно
                                научиться программировать с нуля, освоить
                                IT-профессию, обрести любимое хобби,
                                познакомиться с единомышленниками и, главное,
                                воплотить мечту — стать разработчиком.
                            </p>
                            <p>
                                Мы поддерживаем креативность и свободу мысли —
                                наши тренеры готовы поддержать самые смелые идеи
                                и помочь в их воплощении.
                            </p>
                            <p>
                                Вы можете обучаться как офлайн, так и выбрать
                                онлайн-курсы — они доступны в индивидуальном и
                                групповом форматах. Занятия проходят в удобное
                                время: обычно в выходные дни и вечером — так что
                                вы сможете сочетать их с работой или учебой.
                            </p>
                            <p>
                                Чтобы выбирать курс было удобнее, мы предлагаем
                                разнообразные форматы обучения: индивидуальные и
                                групповые занятия как офлайн, так и онлайн. Мы
                                стремимся сделать процесс обучения максимально
                                гибким и удобным для наших студентов. Ждем в
                                LION IT-SCHOOL!
                            </p>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </>
    );
};

export default InfoBlock;
