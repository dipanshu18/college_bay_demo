import Home from "./pages/Home";
import UserSignup from "./pages/UserSignup";
import UserLogin from "./pages/UserLogin";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./pages/Explore";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/signup" element={<UserSignup />} />
					<Route path="/login" element={<UserLogin />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</BrowserRouter>
			<Explore />
		</div>
	);
}

export default App;
