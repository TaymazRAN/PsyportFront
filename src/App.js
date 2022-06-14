import "./App.css";
import Landing from "./pages/landing/Landing";
import Admin from "./pages/admin/Admin";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Shop from "./component/shop/Shop";
import Runlist from "./pages/runList/Runlist";
import Report from "./pages/report/Report";
import Profile from "./pages/profile/Profile";
import Practice from "./pages/practice/Practice";

function App() {
  return (
    <Router className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        {/* <Route path="/category" element={<Category />} /> */}
        {/* <Route path="/package" element={<Package />} /> */}
        <Route path="/practice" element={<Practice />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/report" element={<Report />} />
        <Route path="/runlist" element={<Runlist />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
