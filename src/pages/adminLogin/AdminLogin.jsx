import React from "react";
import Menutop from "../../component/menuTop/Menutop";
import Footer from "../../component/footer/Footer";
import Faq from "../../component/faq/Faq";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import "./adminLogin.css";
import { Button } from "@mui/material";

export default function AdminLogin() {
	return (
		<div>
			<Menutop />
			<FormGroup className="loginFormContainer">
				<div className="loginForm" dir="rtl">
					<div className="loginTitle bold">ورود به حساب کاربری</div>
					<div className="formInputContainer">
						<TextField
							className="formInput"
							variant="outlined"
							label="شناسه کاربری"
						/>
						<TextField
							className="formInput"
							variant="outlined"
							label="رمز ورود"
							type="password"
							autoComplete="current-password"
						/>
					</div>
					<div className="loginFooter">
						<Button variant="contained">فراموشی رمز عبور</Button>
						<FormControlLabel
							className="formRadio"
							control={<Checkbox defaultChecked />}
							label=" مرا به خاطر بسپار"
						/>
					</div>
					<div className="loginButtonContainer">
						<Button variant="outlined">ورود به حساب کاربری</Button>
					</div>
				</div>
			</FormGroup>
			<Faq />
			<Footer />
		</div>
	);
}
