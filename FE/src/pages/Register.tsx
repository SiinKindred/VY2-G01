import { Alert, Snackbar } from "@mui/material";
import React, { useState } from "react";
import moment from "moment";
import { UserRegisterDTO } from "../model/register.dto";
import UserInfoRegister from "../components/Register/UserInfo.register";
import CompanyInfoRegister from "../components/Register/CompanyInfo.register";
import UsernamePasswordRegister from "../components/Register/UsernamePassword.register";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
	const navigate = useNavigate();
	const [inputs, setInputs] = useState<UserRegisterDTO>({
		username: "",
		password: "",
		name: "",
		email: "",
		gender: 0,
		dob: moment(new Date()).format("YYYY/MM/DD"),
		phone: "",
		address: "",
		type: "USER",
		reward: "",
		company_name: "",
		services: [],
	});
	const [companyChecked, setCompanyChecked] = useState(false);
	const [serviceChecked, setServiceChecked] = useState<string[]>([]);

	const [snackBar, setOpenSnackbar] = useState(false);

	const handleInputChange = (event: any) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	async function onRegisterSubmit(e: any) {
		if (
			inputs.address === "" ||
			inputs.email === "" ||
			inputs.gender === "" ||
			inputs.name === "" ||
			inputs.password === "" ||
			inputs.phone === "" ||
			inputs.username === ""
		) {
			setOpenSnackbar(true);
			return;
		}
		// ||  /\d{0,10}/i.test(inputs.phone)
		if(inputs.phone.length != 10) {
			return alert("Số điện thoại gồm 10 chữ số")
		}

		const data = { ...inputs, services: serviceChecked};
		const req = await fetch(
			`${process.env.REACT_APP_API_URL}/api/user/postRegister`,
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			}
		);
		const response = await req.json();
		if (response.success) {
			navigate("/login");
		} else {
			setOpenSnackbar(true);
		}
	}

	const handleCloseSnackBar = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSnackbar(false);
	};
	return (
		<>
			<UserInfoRegister
				inputs={inputs}
				setInputs={setInputs}
				handleInputChange={handleInputChange}
			/>
			<CompanyInfoRegister
				inputs={inputs}
				companyChecked={companyChecked}
				setCompanyChecked={setCompanyChecked}
				serviceChecked={serviceChecked}
				setServiceChecked={setServiceChecked}
				handleInputChange={handleInputChange}
			/>
			<UsernamePasswordRegister
				onRegisterSubmit={onRegisterSubmit}
				inputs={inputs}
				handleInputChange={handleInputChange}
			/>
			<Snackbar
				open={snackBar}
				autoHideDuration={3000}
				onClose={handleCloseSnackBar}
			>
				<Alert
					onClose={handleCloseSnackBar}
					severity="error"
					sx={{ width: "100%" }}
				>
					Validation failed
				</Alert>
			</Snackbar>
		</>
	);
};

export default Register;
