import {Grid, Paper} from "@mui/material";
import UserChangePassword from "../components/Profile/UserChangePassword";
import UserInfo from "../components/Profile/UserInfo";
import globalStateAndAction from "../container/global.state.action";
import {User} from "../model/user";
import {FC, useEffect, useState} from 'react';
import {Order} from "../model/Order";
import OrderTable from "../components/Order/OrderTable";


interface Props {
    user: User,
    setOrders: (orders: Order[]) => void,
    orders: Order[],
    fetchUser: (user: User) => void
}

const UserProfile: FC<Props> = ({user, setOrders, orders, fetchUser}) => {
    useEffect(() => {
        Order.getOrders().then((res) => {
            if (res.success)
                setOrders(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <>
            <Grid container spacing={1}>
                <Paper elevation={3} sx={{padding: "1rem"}}>
                    <UserInfo user={user} fetchUser={fetchUser}/>
                    <UserChangePassword/>
                    <OrderTable/>
                </Paper>
            </Grid>
        </>
    );
};

export default globalStateAndAction(UserProfile);
