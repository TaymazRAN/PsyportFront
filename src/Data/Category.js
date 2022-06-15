// {
//   "name": "string"
// }

// CreatePackageCategoryDto{
//   name*	string
//   maxLength: 80
//   minLength: 0
//   }

import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const categoryColumns = [
	{
		field: "id",
		headerName: "شناسه",
		width: 70,
	},
	{
		field: "name",
		headerName: "نام دسته بندی",
		width: 300,
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

export const categoryRows = [
	{
		id: 1,
		name: "بسته های سطح کارشناسی",
	},
	{
		id: 2,
		name: "بسته های سطح مدیریت",
	},
	{
		id: 3,
		name: "بسته های سنجش تمرکز",
	},
];