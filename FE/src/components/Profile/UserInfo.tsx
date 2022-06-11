import {AdapterMoment} from "@mui/x-date-pickers/AdapterMoment";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {
    Select,
    MenuItem,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,
    TextField,
    Grid, Button, Typography, Paper,
} from "@mui/material";
import {DatePicker} from "@mui/lab";
import {User} from "../../model/user";
import {useState} from "react";
import {CompareArrows} from "@mui/icons-material"

interface Props {
    user: User;
    fetchUser: (user: User) => void
}

const UserInfo: React.FC<Props> = ({user, fetchUser}) => {
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [date, setDate] = useState(new Date());

    const submitChangeInfoHandle = () => {
        if (!user.name || !user.address || !user.email || !user.phone)
            return alert("Vui lòng điền đầy đủ thông tin trước khi lưu!");

        setSubmitting(true);
        User.changeInfo(user).then((res) => {
            alert(res.message)
        }).catch((err) => {
            alert(err.message)
        }).finally(() => {
            setSubmitting(false);
        })
    }

    return (
        <Grid container spacing={2} padding={"2rem"}>
            <Grid item xs={12}>
                <h2>Thông tin cá nhân</h2>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment">
                        Tên đầy đủ
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment"
                        defaultValue={user.name}
                        onChange={(event) => {
                            user.name = event.target.value
                        }}
                        startAdornment={
                            <InputAdornment position="start"></InputAdornment>
                        }
                        label="Tên đầy đủ"
                        name="name"
                        required
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Giới tính
                    </InputLabel>
                    <Select
                        labelId="gender-select-label"
                        id="gender-select"
                        label="Giới tính"
                        name="gender"
                        defaultValue={user.gender ? 1 : 0}
                        onChange={({target}) => {
                            user.gender = target.value == "1"
                        }}
                        required
                    >
                        <MenuItem value={0}>Nam</MenuItem>
                        <MenuItem value={1}>Nữ</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl variant="outlined" fullWidth>
                    <LocalizationProvider dateAdapter={AdapterMoment}>
                        <DatePicker
                            label="Ngày sinh"
                            inputFormat="DD/MM/yyyy"
                            value={user.dob}
                            onChange={(newDate) => {
                                if (newDate != null) {
                                    setDate(new Date(newDate));
                                    user.dob = date;
                                }
                            }}
                            renderInput={(params) => <TextField {...params} name="dob"/>}
                        />
                    </LocalizationProvider>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined">Địa chỉ</InputLabel>
                    <OutlinedInput
                        id="outlined"
                        label="Địa chỉ"
                        name="address"
                        required
                        defaultValue={user.address}
                        onChange={({target}) => {
                            user.address = target.value;
                        }}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined">Email</InputLabel>
                    <OutlinedInput
                        id="outlined"
                        label="Email"
                        name="email"
                        type="email"
                        defaultValue={user.email}
                        onChange={({target}) => {
                            user.email = target.value;
                        }}
                        required
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined">
                        Số điện thoại
                    </InputLabel>
                    <OutlinedInput
                        id="outlined"
                        label="Số điện thoại"
                        name="phone"
                        defaultValue={user.phone}
                        onChange={({target}) => {
                            user.phone = target.value;
                        }}
                        required
                    />
                </FormControl>
            </Grid>
            {user.company_name && <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel htmlFor="outlined">
                        Số điện thoại
                    </InputLabel>
                    <OutlinedInput
                        id="outlined"
                        label="Tên Doanh Nghiệp"
                        name="phone"
                        defaultValue={user.company_name}
                        onChange={({target}) => {
                            user.company_name = target.value;
                        }}
                        required
                    />
                </FormControl>
            </Grid>}
            <Grid item container justifyContent={"flex-end"}>
                <FormControl sx={{m: 1}}>
                    <Button variant="contained" color={"success"} disabled={submitting}
                            onClick={submitChangeInfoHandle}>Lưu</Button>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <Paper style={{padding: 10}}>
                    <h2>Điểm Thưởng</h2>
                    <Grid container>
                        <Typography sx={{background: "#eee"}} variant={"h2"}>{user.reward} Điểm</Typography>
                        <CompareArrows sx={{fontSize: "64px"}}/>
                        <Typography sx={{background: "#eee"}} variant={"h2"}>{user.reward} VND</Typography>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default UserInfo;
