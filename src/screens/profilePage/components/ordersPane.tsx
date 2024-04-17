import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Table,
    Label,
} from "@/UI/SUI";

const OrdersPane: React.FC = () => {
    return (
        <Table striped>
            <TableHeader>
                <TableRow>
                    <TableHeaderCell>Название курса</TableHeaderCell>
                    <TableHeaderCell>Дата заказа</TableHeaderCell>
                    <TableHeaderCell>Статус</TableHeaderCell>
                    <TableHeaderCell>Стоимость</TableHeaderCell>
                    <TableHeaderCell>Гарантийный взнос</TableHeaderCell>
                </TableRow>
            </TableHeader>

            <TableBody>
                <TableRow>
                    <TableCell>Python - разработчик</TableCell>
                    <TableCell>{new Date().toLocaleDateString()}</TableCell>
                    <TableCell>
                        <Label color="green">Оплачен</Label>
                    </TableCell>
                    <TableCell>600 000</TableCell>
                    <TableCell>60 000</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Web - разработчик</TableCell>
                    <TableCell>{new Date().toLocaleDateString()}</TableCell>
                    <TableCell>
                        <Label color="yellow">Ожидаем взнос</Label>
                    </TableCell>
                    <TableCell>600 000</TableCell>
                    <TableCell>60 000</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        Разработчик мобильных приложений (iOS, Android)
                    </TableCell>
                    <TableCell>{new Date().toLocaleDateString()}</TableCell>
                    <TableCell>
                        <Label color="green">Оплачен</Label>
                    </TableCell>
                    <TableCell>600 000</TableCell>
                    <TableCell>60 000</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Java - разработчик</TableCell>
                    <TableCell>{new Date().toLocaleDateString()}</TableCell>
                    <TableCell>
                        <Label color="red">Отменен</Label>
                    </TableCell>
                    <TableCell>600 000</TableCell>
                    <TableCell>60 000</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default OrdersPane;
