import "./sideBar.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DiscountOutlinedIcon from "@mui/icons-material/DiscountOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import QuizIcon from "@mui/icons-material/Quiz";
import BiotechIcon from "@mui/icons-material/Biotech";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
		<div className="sideBar">
			<div className="sideBarWrapper">
				<div className="sideBarMenu">
					<div className="sideBarTitle bold"> داشبورد</div>
					<ul className="sideBarList">
						<li className="sideBarListItem">
							<PersonOutlineIcon className="sideBarIcon" />
							مدیریت پروفایل
						</li>
						<li className="sideBarListItem">
							<AttachMoneyOutlinedIcon className="sideBarIcon" />
							مدیریت فروش
						</li>
						<NavLink
							to="/admin/"
							activeclassname="active"
							className="sideBarListItem"
						>
							<PeopleOutlineIcon className="sideBarIcon" />
							لیست کاربران
						</NavLink>
						<li className="sideBarListItem">
							<BarChartOutlinedIcon className="sideBarIcon" />
							گزارش کلی سیستم
						</li>
					</ul>
				</div>
				<div className="sideBarMenu">
					<div className="sideBarTitle bold"> مدیریت بسته ها</div>
					<ul className="sideBarList">
						<NavLink
							to="/admin/categoryList"
							activeclassname="active"
							className="sideBarListItem"
						>
							<CategoryOutlinedIcon className="sideBarIcon" />
							دسته بندی ها
						</NavLink>

						<NavLink
							to="/admin/packageList"
							activeclassname="active"
							className="sideBarListItem"
						>
							<Inventory2OutlinedIcon className="sideBarIcon" />
							بسته ها
						</NavLink>

						<li className="sideBarListItem">
							<DiscountOutlinedIcon className="sideBarIcon" />
							تخفیف ها
						</li>
					</ul>
				</div>
				<div className="sideBarMenu">
					<div className="sideBarTitle bold"> مدیریت آزمون ها</div>
					<ul className="sideBarList">
						<li className="sideBarListItem">
							<AssessmentOutlinedIcon className="sideBarIcon" />
							کارنامه ها
						</li>
						<li className="sideBarListItem">
							<BiotechIcon className="sideBarIcon" />
							اجرا ها
						</li>
						<li className="sideBarListItem">
							<QuizIcon className="sideBarIcon" />
							تمرین ها و ارجاع
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

/*


            

            
            
            
*/