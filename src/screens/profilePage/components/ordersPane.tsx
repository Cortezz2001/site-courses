import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Table,
    Label,
    SemanticCOLORS,
} from "@/UI/SUI";
import { useTranslations } from "next-intl";

const tableData = [
    {
        orderTitle: "Python - разработчик",
        orderDate: new Date().toLocaleDateString(),
        orderStatusColor: "green",
        orderStatus: "Оплачен",
        orderPrice: "600 000",
        orderDeposit: "60 000",
    },
    {
        orderTitle: "Web - разработчик",
        orderDate: new Date().toLocaleDateString(),
        orderStatusColor: "yellow",
        orderStatus: "Ожидаем взнос",
        orderPrice: "600 000",
        orderDeposit: "60 000",
    },
    {
        orderTitle: "Разработчик мобильных приложений (iOS, Android)",
        orderDate: new Date().toLocaleDateString(),
        orderStatusColor: "green",
        orderStatus: "Оплачен",
        orderPrice: "600 000",
        orderDeposit: "60 000",
    },
    {
        orderTitle: "Java - разработчик",
        orderDate: new Date().toLocaleDateString(),
        orderStatusColor: "red",
        orderStatus: "Отменен",
        orderPrice: "600 000",
        orderDeposit: "60 000",
    },
];

const OrdersPane: React.FC = () => {
    const t = useTranslations("Profile.Orders");
    return (
        <Table striped>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>{t('courseName')}</TableHeaderCell>
                    <TableHeaderCell>{t('date')}</TableHeaderCell>
                    <TableHeaderCell>{t('status')}</TableHeaderCell>
                    <TableHeaderCell>{t('price')}</TableHeaderCell>
                    <TableHeaderCell>{t('fee')}</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                {tableData.map(
                    ({
                        orderTitle,
                        orderDate,
                        orderStatusColor,
                        orderStatus,
                        orderPrice,
                        orderDeposit,
                    }) => (
                        <TableRow key={orderTitle}>
                            <TableCell>{orderTitle}</TableCell>
                            <TableCell>{orderDate}</TableCell>
                            <TableCell>
                                <Label
                                    color={orderStatusColor as SemanticCOLORS}
                                >
                                    {orderStatus}
                                </Label>
                            </TableCell>
                            <TableCell>{orderPrice}</TableCell>
                            <TableCell>{orderDeposit}</TableCell>
                        </TableRow>
                    )
                )}
            </TableBody>
        </Table>
    );
};

export default OrdersPane;
