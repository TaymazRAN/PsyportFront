import TopBar from "../../component/topBar/TopBar";
import SideBar from "../../component/sideBar/SideBar";
import UserList from "../userList/UserList";
import "./admin.css";

export default function Admin() {
	return (
		<>
			<TopBar />
			<div className="admin">
				<SideBar />
				<div className="page">
					<UserList />
				</div>
			</div>
		</>
	);
}
