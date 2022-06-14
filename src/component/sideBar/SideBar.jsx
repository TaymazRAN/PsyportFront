import "./sideBar.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import QuizIcon from "@mui/icons-material/Quiz";
import BiotechIcon from "@mui/icons-material/Biotech";

export default function SideBar() {
  return (
		<div className="sideBar">
			<div className="sideBarWrapper">
				<div className="sideBarMenu">
					<div className="sideBarTitle bold">داشبورد</div>
					<ul className="sideBarList">
						<li className="sideBarListItem active">
							<PersonOutlineIcon className="sideBarIcon" />
							لیست کاربران
						</li>
						<li className="sideBarListItem">
							<QuizIcon className="sideBarIcon" />
							بسته های آزمون
						</li>
						<li className="sideBarListItem">
							<BiotechIcon className="sideBarIcon" />
							بسته های تمرین
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
