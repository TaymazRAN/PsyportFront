// {
//   "name": "string",
//   "description": "string",
//   "fileName": "string",
//   "isExcersise": true,
//   "displayPiority": 0,
//   "categoryId": 0,
//   "packageDiscountValue": 0
// }

// CreatePackageDto{
//   name	string
//   maxLength: 100
//   minLength: 0
//   nullable: true

//   description	string
//   maxLength: 800
//   minLength: 0
//   nullable: true

//   fileName	string
//   maxLength: 200
//   minLength: 0
//   nullable: true

//   isExcersise*	boolean

//   displayPiority*	integer($int32)

//   categoryId*	integer($int32)

//   packageDiscountValue*	integer($int32)
//   }

import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const packageColumns = [
	{
		field: "id",
		headerName: "شناسه",
		width: 70,
	},
	{
		field: "name",
		headerName: "نام بسته",
		width: 160,
	},
	{
		field: "description",
		headerName: "توضیحات",
		width: 160,
	},
	{
		field: "fileName",
		headerName: "اسم فایل",
		width: 120,
	},
	{
		field: "isExcersise",
		headerName: "نوع بسته",
		width: 120,
		renderCell: (parameters) => {
			return (
				<div className="userListCell">
					{parameters.row.isExcersise ? "تمرین" : "آزمون"}
				</div>
			);
		},
	},
	{
		field: "packageDiscountValue",
		headerName: "درصد تخفیف",
		width: 120,
		renderCell: (parameters) => {
			return (
				<div className="userListCell">
					{parameters.row.packageDiscountValue + "%"}
				</div>
			);
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

export const packageRows = [
	{
		id: 1,
		name: "بـسـتـه عـمـومـی",
		description: "متن تست",
		fileName: "test.exe",
		isExcersise: true,
		displayPiority: 0,
		categoryId: 0,
		packageDiscountValue: 5,
	},
	{
		id: 2,
		name: "بسته  اضطراب و افسردگی",
		description: "متن تست",
		fileName: "test.exe",
		isExcersise: true,
		displayPiority: 0,
		categoryId: 0,
		packageDiscountValue: 0,
	},
	{
		id: 3,
		name: "بسته  تمرکز",
		description: "متن تست",
		fileName: "test.exe",
		isExcersise: true,
		displayPiority: 0,
		categoryId: 0,
		packageDiscountValue: 2,
	},
	{
		id: 4,
		name: "بسته حافظه",
		description: "متن تست",
		fileName: "test.exe",
		isExcersise: true,
		displayPiority: 0,
		categoryId: 0,
		packageDiscountValue: 1,
	},
	{
		id: 5,
		name: "بسته یادگیری",
		description: "متن تست",
		fileName: "test.exe",
		isExcersise: true,
		displayPiority: 0,
		categoryId: 0,
		packageDiscountValue: 0,
	},
	{
		id: 6,
		name: "بسته توجه",
		description: "متن تست",
		fileName: "test.exe",
		isExcersise: true,
		displayPiority: 0,
		categoryId: 0,
		packageDiscountValue: 10,
	},
];