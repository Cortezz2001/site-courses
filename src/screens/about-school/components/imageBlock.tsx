import { Container, Header, Grid, Image, GridRow, GridColumn } from "@/UI/SUI";

const ImageBlock: React.FC = () => {
    return (
        <>
            <Image
                rounded
                alt=""
                src="/it-school-stock.jpg"
                style={{
                    objectFit: "cover",
                    marginTop: "30px",
                    width: "100%",
                    height: "400px",
                }}
            />
        </>
    );
};

export default ImageBlock;
