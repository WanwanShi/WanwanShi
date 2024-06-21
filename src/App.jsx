import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import EducationPage from "./pages/education/EducationPage";
import Experience from "./pages/experience/Experience";
import Error from "./pages/error/Error";

function App() {
	return (
		<>
			<ThemeProvider theme={chosenTheme}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/education" element={<EducationPage />} />
					<Route path="/experience" element={<Experience />} />
					{/* <Route path="/projects" elethement={<Projects />} /> */}
					{/* <Route path="/contact" element={<Contact />} />
				<Route path="/splash" element={<Splash />} /> */}
					<Route path="*" element={<Error />} />
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
