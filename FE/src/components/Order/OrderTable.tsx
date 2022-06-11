import {FC, Fragment} from "react";
import globalStateAndAction from "../../container/global.state.action";
import {
    Divider,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography
} from "@mui/material";
import moment from "moment";
import {Inventory} from "@mui/icons-material";
import {Order} from "../../model/Order";
import {User} from "../../model/user";

const OrderTable: FC<{ orders: Order[], user: User }> = ({orders, user}) => {
    return <>{orders.length > 0 && <>
        <Typography variant={"h4"}> Lịch sử giao dịch
            của {user.type == "PARTNER" ? `đối tác "${user.company_name}"` : `khách hàng "${user.name}"`}</Typography>
        {orders.map((order) => (
            <>
                <Paper style={{padding: "1rem"}}>
                    <List>
                        <ListItem disablePadding>
                            <ListItemText
                                primary={"Đặt lúc: " + moment(order.create_at).format("DD-MM-yyyy HH:mm")}
                                secondary={
                                    <Fragment>
                                        <Typography
                                            sx={{display: 'inline'}}
                                            color="text.primary"
                                        >
                                            Doanh Nghiệp: {order.partner_id.company_name}
                                        </Typography>
                                    </Fragment>
                                }/>
                            <ListItemText primary={"Tổng số tiền: " + order.total.toLocaleString() + " VND"}
                                          style={{textAlign: "end"}}/>
                        </ListItem>
                    </List>
                    <List>
                        <Divider/>
                        {order.details && order.details.map((product) => (
                            <ListItem disablePadding>
                                <ListItemButton onClick={() => {
                                    if (product.link) window.location.href = product.link
                                }}>
                                    <ListItemIcon>
                                        <Inventory/>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={product.productName}
                                        secondary={
                                            <Fragment>
                                                <Typography
                                                    sx={{display: 'inline'}}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    Số lượng:
                                                </Typography>
                                                {" " + product.quantity}
                                            </Fragment>
                                        }/>
                                    <ListItemText primary={product.price.toLocaleString() + " VND"}
                                                  style={{textAlign: "end"}}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                        <Divider/>
                    </List>
                </Paper>
                <Divider/>
            </>

        ))}
    </>}</>
};

export default globalStateAndAction(OrderTable);