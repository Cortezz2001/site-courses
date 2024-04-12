import {
    Container,
    Header,
    Grid,
    GridRow,
    GridColumn,
    Segment,
    List,
    ListItem,
    ListContent,
    Loader,
} from "@/UI/SUI";
import { BreadcrumbComponent } from "@/components/breadcrumb/breadcrumb";
import { IBreadCrumb } from "@/components/breadcrumb/type";
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

        // <Layout>
        //     <>
        //         <BreadcrumbComponent sections={BreadcrumbProps} />
        //         <Grid columns={2} divided style={{ marginTop: "14px" }}>
        //             <GridRow
        //                 style={{ width: "auto !important", paddingTop: "0" }}
        //             >
        //                 <GridColumn
        //                     width={5}
        //                     style={{
        //                         display: "flex",
        //                     }}
        //                 >
        //                     <Segment
        //                         style={{
        //                             padding: "0",
        //                             marginTop: "30px",
        //                         }}
        //                     >
        //                         <Container
        //                             style={{
        //                                 backgroundColor: "#e0e0e0",
        //                                 width: "400px",
        //                                 height: "600px",
        //                                 objectFit: "cover",
        //                             }}
        //                         />
        //                     </Segment>
        //                 </GridColumn>
        //                 <GridColumn
        //                     verticalAlign="middle"
        //                     width={11}
        //                     style={{ paddingLeft: "30px" }}
        //                 >
        //                     <Container
        //                         style={{
        //                             paddingRight: "30px",
        //                         }}
        //                     >
        //                         <List>
        //                             {[...Array(10)].map((_, index) => (
        //                                 <ListItem key={index}>
        //                                     <ListContent>
        //                                         <Container
        //                                             style={{
        //                                                 backgroundColor:
        //                                                     "#e0e0e0",
        //                                                 width: "100%",
        //                                                 height: "25px",
        //                                                 borderRadius: "5px",
        //                                                 marginBottom: "10px",
        //                                             }}
        //                                         />
        //                                     </ListContent>
        //                                 </ListItem>
        //                             ))}
        //                         </List>
        //                     </Container>
        //                 </GridColumn>
        //             </GridRow>
        //         </Grid>
        //         <Container
        //             style={{
        //                 backgroundColor: "#e0e0e0",
        //                 width: "100%",
        //                 height: "25px",
        //                 borderRadius: "5px",
        //                 marginTop: "25px",
        //                 marginBottom: "25px",
        //             }}
        //         />
        //         <Grid
        //             columns={3}
        //             stackable
        //             raised
        //             style={{
        //                 boxShadow: "0px 0px 5px 2px #e0e0e0",
        //                 borderRadius: ".28571429rem",
        //                 margin: "0",
        //                 padding: "20px",
        //             }}
        //         >
        //             <GridRow>
        //                 <Container
        //                     style={{
        //                         backgroundColor: "#e0e0e0",
        //                         width: "100%",
        //                         height: "25px",
        //                         borderRadius: "5px",
        //                     }}
        //                 />
        //             </GridRow>
        //             <GridRow>
        //                 <Container
        //                     style={{
        //                         backgroundColor: "#e0e0e0",
        //                         width: "100%",
        //                         height: "25px",
        //                         borderRadius: "5px",
        //                     }}
        //                 />
        //             </GridRow>
        //         </Grid>
        //     </>
        // </Layout>
    );
}
