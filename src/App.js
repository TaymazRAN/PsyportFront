import "./App.css";
import Landing from "./pages/landing/Landing";
import Admin from "./pages/admin/Admin";
import AdminLogin from "./pages/adminLogin/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
		<Router className="App">
			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route path="/admin" element={<Admin />} />
				<Route path="/adminLogin" element={<AdminLogin />} />
			</Routes>
		</Router>
	);
}

export default App;
