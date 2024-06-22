import { Fade } from "react-awesome-reveal";
import "./Error.css";
import { Link } from "react-router-dom";
import { chosenTheme } from "../../theme";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GoTopButton from "../../components/goTopButton/GoTopButton";
export default function Error() {
	const theme = chosenTheme;
	return (
		<div className="error-main" style={{ backgroundColor: theme.body }}>
			<Header theme={theme} />
			<div className="error-class">
				<Fade direction="up" duration={2000} triggerOnce>
					<h1>Woops</h1>
					<h1 className="error-404">404</h1>
					<p>The requested page is unavailable at the moment!</p>
					<Link
						className="main-button"
						to="/home"
						style={{
							color: theme.body,
							backgroundColor: theme.text,
							border: `solid 1px ${theme.text}`,
							display: "inline-flex",
						}}
					>
						Go Home
					</Link>
				</Fade>
			</div>
			<Footer theme={theme} />
			<GoTopButton theme={theme} />
		</div>
	);
}
