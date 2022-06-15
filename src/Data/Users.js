//admin  user  ....

/// user  fardi....
//login

//
// {
//   "username": "string",
//   "password": "string"
// }

//register

// {
//   "username": "string",
//   "password": "string",
//   "firstName": "string",
//   "lastName": "string",
//   "nationalId": "string",
//   "contactNum": "string",
//   "email": "user@example.com",
//   "currentOccupation": "string",
//   "gender": true
// }

// UserRegisterDto{
//   username*	string
//   maxLength: 50
//   minLength: 0

//   password*	string
//   maxLength: 50
//   minLength: 0

//   firstName*	string
//   maxLength: 50
//   minLength: 0

//   lastName*	string
//   maxLength: 50
//   minLength: 0

//   nationalId*	string
//   maxLength: 10
//   minLength: 0

//   contactNum*	string
//   maxLength: 20
//   minLength: 0

//   email*	string($email)

//   currentOccupation	string
//   maxLength: 50
//   minLength: 0
//   nullable: true

//   gender*	boolean
//   }

import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const userColumns = [
	{
		field: "nationalId",
		headerName: "شناسه",
		width: 70,
	},
	{
		field: "username",
		headerName: "نام کاربری",
		width: 120,
	},
	{
		field: "firstName",
		headerName: "نام",
		width: 120,
	},
	{
		field: "lastName",
		headerName: "نام خانوادگی",
		width: 120,
	},
	{
		field: "contactNum",
		headerName: "شماره تماس",
		width: 130,
	},
	{
		field: "email",
		headerName: "ایمیل",
		width: 190,
	},
	{
		field: "currentOccupation",
		headerName: "شغل",
		width: 120,
	},
	{
		field: "gender",
		headerName: "جنسیت",
		width: 80,
		renderCell: (parameters) => {
			return <div className="userListCell">{parameters.row.gender ? "مرد" : "زن"}</div>;
		},
	},
	{
		field: "action",
		headerName: "امکانات",
		width: 170,
		renderCell: () => {
			return (
				<div className="userListCell">
					<Button variant="contained" className="userListEdit">
						ویرایش
					</Button>
					<Button variant="outlined" color="error" className="userListDelete">
						<DeleteOutlineIcon />
					</Button>
				</div>
			);
		},
	},
];

export const userRows = [
	{
		id: 1,
		username: "Hraeisi",
		password: "string",
		firstName: "حسام",
		lastName: "رئیسی",
		nationalId: "1",
		contactNum: "+98-5016181031",
		email: "Hraeisi@example.com",
		currentOccupation: "مربی ورزشی",
		gender: true,
	},
	{
		id: 2,
		username: "Fradish",
		password: "string",
		firstName: "فرید",
		lastName: "رادیش",
		nationalId: "2",
		contactNum: "+98-1319782014",
		email: "Fradish@example.com",
		currentOccupation: "کارمند",
		gender: true,
	},
	{
		id: 3,
		username: "Earabnia",
		password: "string",
		firstName: "احسان",
		lastName: "عرب نیا",
		nationalId: "3",
		contactNum: "+98-1265284464",
		email: "Earabnia@example.com",
		currentOccupation: "منشی",
		gender: true,
	},
	{
		id: 4,
		username: "Msaharkhiz",
		password: "string",
		firstName: "مهدی",
		lastName: "سحرخیز",
		nationalId: "4",
		contactNum: "+98-1458903797",
		email: "Msaharkhiz@example.com",
		currentOccupation: "پرستار",
		gender: true,
	},
	{
		id: 5,
		username: "Marjmand",
		password: "string",
		firstName: "ملیحه",
		lastName: "ارجمند",
		nationalId: "5",
		contactNum: "+98-5850940862",
		email: "Marjmand@example.com",
		currentOccupation: "پزشک",
		gender: true,
	},
	{
		id: 6,
		username: "Klotfi",
		password: "string",
		firstName: "خاتون",
		lastName: "لطفی",
		nationalId: "6",
		contactNum: "+98-2975974619",
		email: "Klotfi@example.com",
		currentOccupation: "روانشناس",
		gender: true,
	},
	{
		id: 7,
		username: "Nbaghayi",
		password: "string",
		firstName: "نسیم",
		lastName: "بقایی",
		nationalId: "7",
		contactNum: "+98-6846757940",
		email: "Nbaghayi@example.com",
		currentOccupation: "مدیر",
		gender: true,
	},
	{
		id: 8,
		username: "Bgolzar",
		password: "string",
		firstName: "بهزاد",
		lastName: "گلزار",
		nationalId: "8",
		contactNum: "+98-6412827604",
		email: "Bgolzar@example.com",
		currentOccupation: "طراح",
		gender: true,
	},
	{
		id: 9,
		username: "Kmehrnia",
		password: "string",
		firstName: "کریم",
		lastName: "مهرنیا",
		nationalId: "9",
		contactNum: "+98-6888191462",
		email: "Kmehrnia@example.com",
		currentOccupation: "خیاط",
		gender: true,
	},
	{
		id: 10,
		username: "Jhashempoor",
		password: "string",
		firstName: "جعفر",
		lastName: "هاشم پور",
		nationalId: "10",
		contactNum: "+98-8846637671",
		email: "Jhashempoor@example.com",
		currentOccupation: "نویسنده",
		gender: true,
	},
];

/*
    {
	{
		id: 3,
		username: "احسان عرب نیا",
		avatar:
			"https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "غیر فعال",
		transaction: "50،000 تومان",
	},
	{
		id: 4,
		username: "مهدی سحرخیز",
		avatar:
			"https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "فعال",
		transaction: "300،000 تومان",
	},
	{
		id: 5,
		username: "ملیحه ارجمند",
		avatar:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "فعال",
		transaction: "230،000 تومان",
	},
	{
		id: 6,
		username: "خاتون لطفی",
		avatar:
			"https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "فعال",
		transaction: "140،000 تومان",
	},
	{
		id: 7,
		username: "نسیم بقایی",
		avatar:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "غیر فعال",
		transaction: "100،000 تومان",
	},
	{
		id: 8,
		username: "بهزاد گلزار",
		avatar:
			"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "فعال",
		transaction: "150،000 تومان",
	},
	{
		id: 9,
		username: "کریم مهرنیا",
		avatar:
			"https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "غیر فعال",
		transaction: "400،000",
	},
	{
		id: 10,
		username: "جعفر هاشم پور",
		avatar:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "فعال",
		transaction: "200،000 تومان",
	},
*/