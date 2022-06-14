import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

export const userColumns = [
	{
		field: "user",
		headerName: "کاربر",
		width: 200,
		renderCell: (parameters) => {
			return (
				<div className="userListCell">
					<img className="userListAvatar" src={parameters.row.avatar} alt="" />
					{parameters.row.username}
				</div>
			);
		},
	},
	{ field: "email", headerName: "ایمیل", width: 200 },
	{
		field: "status",
		headerName: "وضعیت",
		width: 160,
		renderCell: (parameters) => {
			return (
				<div className="userListCell">
					{parameters.row.status}
					{parameters.row.status === 'فعال' ? (
						<FiberManualRecordIcon className="userListStatus" />
					) : (
						<FiberManualRecordIcon className="userListStatus red" />
					)}
				</div>
			);
		},
	},
	{ field: "transaction", headerName: "پرداخت ها", width: 160 },
	{
		field: "action",
		headerName: "امکانات",
		width: 160,
		renderCell: () => {
			return (
				<div className="userListCell">
					<Button className="userListEdit">ویرایش</Button>
					<DeleteOutlineIcon className="userListDelete" />
				</div>
			);
		},
	},
];

export const userRows = [
	{
		id: 1,
		username: "حسام رئیسی",
		avatar:
			"https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		email: "Hesam@gmail.com",
		status: "فعال",
		transaction: "220،000 تومان",
	},
	{
		id: 2,
		username: "فرید رادیش",
		avatar:
			"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		email: "john@gmail.com",
		status: "فعال",
		transaction: "100،000 تومان",
	},
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
];
