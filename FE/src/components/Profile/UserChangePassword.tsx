import {useState, MouseEvent, ChangeEvent, FC} from "react";
import {
    IconButton,
    Button,
    OutlinedInput,
    InputLabel,
    InputAdornment,
    FormControl,
    Grid,
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import globalStateAndAction from "../../container/global.state.action";
import {User} from "../../model/user";

interface State {
    amount: string;
    old: string;
    confirm: string,
    password: string,
    weight: string;
    weightRange: string;
    showPassword: { old: boolean, new: boolean, confirm: boolean };
}

interface Props {
    profile: { isChangePassword: boolean },
    setIsChange: (v: boolean) => void
}


const UserChangePassword: FC<Props> = ({profile, setIsChange}) => {

    const [submitting, setSubmitting] = useState<boolean>(false);
    const [values, setValues] = useState<State>({
        amount: "",
        old: "12345678",
        password: "12345678",
        confirm: "12345678",
        weight: "",
        weightRange: "",
        showPassword: {
            old: false,
            new: false,
            confirm: false
        },
    });

    const handleClickShowPassword = (key: "old" | "new" | "confirm") => {
        return (event: MouseEvent<HTMLButtonElement>) => {

            setValues({
                ...values,
                // @ts-ignore
                showPassword: {
                    [key]: !values.showPassword[key]
                },
            });
        };
    }


    const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleChange =
        (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
            setValues({...values, [prop]: event.target.value});
        };

    const SubmitChangePasswordHandle = () => {
        const {old, confirm, password} = values;
        if (!old) {
            return alert("Vui lòng điền mật khẩu cũ");
        }

        if (!password) {
            return alert("Vui lòng điền mật khẩu mới");
        }

        if (!confirm) {
            return alert("Vui lòng điền mật khẩu xác nhận");
        }

        if (password.length < 8) {
            return alert("Mật khẩu phải có ít nhất 8 kí tự");
        }

        if (password != confirm) {
            return alert("Mật khẩu xác nhận không đúng");
        }
        setSubmitting(true);
        User.changePassword(old, password).then((res) => {
            if (res.success)
                setIsChange(false);
            alert(res.message);
        }).catch((err) => {
            alert(err.message);
        }).finally(() => {
            setSubmitting(false);
        });
    }

    return <>{profile.isChangePassword ? <Grid container>
        <h2 style={{margin: "1rem"}}>Đổi mật khẩu</h2>
        <FormControl sx={{m: 1, width: 1}}>
            <InputLabel htmlFor="old">
                Mật khẩu cũ
            </InputLabel>
            <OutlinedInput
                id="old"
                type={values.showPassword.old ? "text" : "password"}
                value={values.old}
                onChange={handleChange("old")}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword("old")}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword.old ? (
                                <VisibilityOff/>
                            ) : (
                                <Visibility/>
                            )}
                        </IconButton>
                    </InputAdornment>
                }
                label="Mật khẩu cũ"
            />
        </FormControl>
        <FormControl sx={{m: 1, width: 1}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
                Mật khẩu mới
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword.new ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword("new")}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword.new ? (
                                <VisibilityOff/>
                            ) : (
                                <Visibility/>
                            )}
                        </IconButton>
                    </InputAdornment>
                }
                label="Mật khẩu mới"
            />
        </FormControl>
        <FormControl sx={{m: 1, width: 1}} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
                Xác nhận mật khẩu
            </InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword.confirm ? "text" : "password"}
                value={values.confirm}
                onChange={handleChange("confirm")}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword("confirm")}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {values.showPassword.confirm ? (
                                <VisibilityOff/>
                            ) : (
                                <Visibility/>
                            )}
                        </IconButton>
                    </InputAdornment>
                }
                label="Xác nhận mật khẩu"
            />
        </FormControl>
        <FormControl sx={{m: 1}}>
            <Button variant="contained" color={"error"} onClick={() => setIsChange(false)}>
                Hủy
            </Button>
        </FormControl>
        <FormControl sx={{m: 1}}>
            <Button variant="contained" color={"success"} disabled={submitting} onClick={SubmitChangePasswordHandle}>Lưu</Button>
        </FormControl>
    </Grid> : <Grid container justifyContent={"flex-end"}>
        <Grid item>
            <Button variant="contained" color={"primary"} onClick={() => setIsChange(true)}>
                Đổi Mật Khẩu
            </Button>
        </Grid>
    </Grid>}</>
};

export default globalStateAndAction(UserChangePassword)