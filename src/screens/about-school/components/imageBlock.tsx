import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";

const ImageBlock: React.FC = () => {
    return (
        <Container style={{ marginTop: "30px" }}>
            <Grid divided>
                <GridRow centered>
                    <GridColumn centered>
                        <Image
                            rounded
                            alt=""
                            src="/it-school-stock.jpg"
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "400px",
                            }}
                        />
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
    );
};

export default ImageBlock;
