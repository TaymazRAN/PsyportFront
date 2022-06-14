import "./sideBar.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import QuizIcon from "@mui/icons-material/Quiz";
import BiotechIcon from "@mui/icons-material/Biotech";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <div className="sideBarTitle bold "> داشبورد مدیریت اصلی</div>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
              <PersonOutlineIcon className="sideBarIcon" />
              لیست کاربران
            </li>

            <li className="sideBarListItem">
              <QuizIcon className="sideBarIcon" />
              گروه بندی پکیج
            </li>

            <li className="sideBarListItem">
              <QuizIcon className="sideBarIcon" />
              مدیریت پکیج ها
            </li>

            <li className="sideBarListItem">
              <QuizIcon className="sideBarIcon" />
              تخفیف ها
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
              مدیریت فروش
            </li>
            <li className="sideBarListItem">
              <BiotechIcon className="sideBarIcon" />
              گزارش کلی سیستم
            </li>
            <li className="sideBarListItem">
              <BiotechIcon className="sideBarIcon" />
              مدیریت پروفایل
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
