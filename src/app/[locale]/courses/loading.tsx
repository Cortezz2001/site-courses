import { Container, Loader } from "@/UI/SUI";
import { Layout } from "@/layouts/layout";

export default function Loading() {


    return (
        <Layout>
            <>
                <Container
                    style={{
                        minHeight: "50vh",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Loader active size="massive" />
                </Container>
            </>
        </Layout>
    );
}
