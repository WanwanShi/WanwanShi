import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";

function App() {
	return (
		<>
			<ThemeProvider theme={chosenTheme}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />
					{/* <Route path="/education" element={<Education />} />
				<Route path="/experience" element={<Experience />} />
				<Route path="/projects" eletheme) {rojects />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/splash" element={<Splash />} />
				<Route path="*" element={<Error />} /> */}
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;
