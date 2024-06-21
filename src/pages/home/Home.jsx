import Header from "../../components/header/Header";
import Greeting from "../../components/greeting/Greeting";
import Skills from "../../components/skills/Skills";
import Footer from "../../components/footer/Footer";
import GoTopButton from "../../components/goTopButton/GoTopButton";
import { chosenTheme } from "../../theme";
function Home() {
	return (
		<div style={{ backgroundColor: chosenTheme.body }}>
			<Header theme={chosenTheme} />
			<Greeting theme={chosenTheme} />
			<Skills theme={chosenTheme} />
			<Footer theme={chosenTheme} />
			<GoTopButton theme={chosenTheme} />
		</div>
	);
}

export default Home;
