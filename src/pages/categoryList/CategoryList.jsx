import "../userList/userList.css";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { categoryColumns, categoryRows } from "../../Data/Category";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";

export default function CategoryList() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	
	return (
		<div dir="rtl" className="userList">
			<div className="topButtonContainer">
				<Button
					className="topButton"
					variant="outlined"
					color="success"
					onClick={handleClickOpen}
				>
					اضافه کردن <AddIcon className="topButtonIcon" />
				</Button>
			</div>
			<div style={{ height: 530, width: "100%" }}>
				<DataGrid
					rows={categoryRows}
					columns={categoryColumns}
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
					<DialogTitle>اضافه کردن دسته بندی</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							dir="rtl"
							margin="dense"
							id="categoryName"
							label="نام دسته بندی"
							type="text"
							fullWidth
							variant="outlined"
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