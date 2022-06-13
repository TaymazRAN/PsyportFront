import "./App.css";
import Landing from "./pages/landing/Landing";
import Admin from "./pages/admin/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
		<Router className="App">
			<Routes>
				<Route exact path="/" element={<Landing />} />
				<Route path="/admin" element={<Admin />} />
			</Routes>
		</Router>
	);
}

export default App;
