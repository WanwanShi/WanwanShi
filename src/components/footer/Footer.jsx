import "./Footer.css";
import { Fade } from "react-awesome-reveal";
import { greeting } from "../../personalInfo";

export default function Footer(props) {
	const { theme } = props;
	return (
		<div className="footer-div">
			<Fade direction="up" triggerOnce>
				<p className="footer-text" style={{ color: theme.secondaryText }}>
					Made with <span role="img">❤️</span> by {greeting.title}
				</p>
			</Fade>
		</div>
	);
}
