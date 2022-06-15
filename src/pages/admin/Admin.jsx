import TopBar from "../../component/topBar/TopBar";
import SideBar from "../../component/sideBar/SideBar";
import UserList from "../userList/UserList";
import CategoryList from "../categoryList/CategoryList";
import PackageList from "../packageList/PackageList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./admin.css";

export default function Admin() {
  return (
		<>
			<TopBar />
			<div className="admin">
				<SideBar />
				<div className="page">
					<Routes>
						{/* <Route exact path="/" element={<AdminProfile />} /> */}
						<Route path="/" element={<UserList />} />
						<Route path="/categoryList" element={<CategoryList />} />
						<Route path="/packageList" element={<PackageList />} />
					</Routes>
				</div>
			</div>
		</>
	);
}
