import "./sideBar.css";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import QuizIcon from "@mui/icons-material/Quiz";
import BiotechIcon from "@mui/icons-material/Biotech";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <div className="sideBarTitle bold "> داشبورد مدیریت فردی</div>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <BiotechIcon className="sideBarIcon" />
              مدیریت پروفایل
            </li>
            <li className="sideBarListItem">
              <BiotechIcon className="sideBarIcon" />
              مدیریت کارنامه
            </li>
            <li className="sideBarListItem">
              <BiotechIcon className="sideBarIcon" />
              لیست اجراها
            </li>
            <li className="sideBarListItem">
              <BiotechIcon className="sideBarIcon" />
              تمرین و ارجاع
            </li>
            <li className="sideBarListItem">
              <BiotechIcon className="sideBarIcon" />
              لیست اجراها
            </li>
            <li className="sideBarListItem">
              <BiotechIcon className="sideBarIcon" />
              پیکیج خریداری شده
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
