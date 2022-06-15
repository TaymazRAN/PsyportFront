import "../userList/userList.css";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { packageColumns, packageRows } from "../../Data/Package";
import { categoryRows } from "../../Data/Category";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

let categoryRowsAutoComplete = categoryRows;
categoryRowsAutoComplete.map((item) => { 
	return {...item, label: item.name};
});

console.log(categoryRowsAutoComplete);

export default function PackageList() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [type, setType] = React.useState("");

	const changeType = (event) => {
		setType(event.target.value);
	};

	return (
		<div dir="rtl" className="userList">
			<div className="topButtonContainer">
				<Button
					className="topButton"
					variant="outlined"
					color="success"
					sx={{ padding: "14px 15px" }}
					onClick={handleClickOpen}
				>
					اضافه کردن <AddIcon className="topButtonIcon" />
				</Button>
				<Autocomplete
					disablePortal
					id="category"
					options={categoryRowsAutoComplete}
					sx={{ width: 300, marginRight: "15px" }}
					renderInput={(params) => <TextField {...params} label="دسته بندی" />}
				/>
			</div>
			<div style={{ height: 530, width: "100%" }}>
				<DataGrid
					rows={packageRows}
					columns={packageColumns}
					pageSize={8}
					rowsPerPageOptions={[8]}
					checkboxSelection
					disableSelectionOnClick
				/>
				<Dialog
					dir="rtl"
					open={open}
					onClose={handleClose}
					fullWidth
					maxWidth="sm"
				>
					<DialogTitle>اضافه کردن بسته</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="name"
							label="نام بسته"
							type="text"
							fullWidth
							variant="outlined"
						/>
						<TextField
							dir="rtl"
							margin="dense"
							id="description"
							label="توضیحات"
							type="text"
							fullWidth
							variant="outlined"
						/>
						<Button
							variant="outlined"
							component="label"
							id="fileName"
							sx={{ margin: "15px 0" }}
							fullWidth
						>
							آپلود فایل <UploadFileIcon className="topButtonIcon" />
							<input type="file" hidden />
						</Button>
						<FormControl fullWidth className="selectContainer">
							<InputLabel id="type">نوع بسته</InputLabel>
							<Select
								labelId="type"
								id="isExcersise"
								variant="outlined"
								value={type}
								onChange={changeType}
								fullWidth
								label="نوع بسته"
							>
								<MenuItem value="">
									<em>انتخاب کنید</em>
								</MenuItem>
								<MenuItem value={true}>تمرین</MenuItem>
								<MenuItem value={false}>آزمون</MenuItem>
							</Select>
						</FormControl>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="packageDiscountValue"
							label="میزان تخفیف"
							type="number"
							fullWidth
							variant="outlined"
							defaultValue="0"
						/>
					</DialogContent>
					<DialogActions>
						<Button
							variant="outlined"
							color="error"
							onClick={handleClose}
							sx={{ marginRight: "15px" }}
						>
							انصراف
						</Button>
						<Button
							variant="outlined"
							color="success"
							onClick={handleClose}
							sx={{ marginRight: "15px" }}
						>
							اضافه کردن
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}
