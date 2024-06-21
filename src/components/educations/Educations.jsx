import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.jsx";
import { degrees } from "../../personalInfo.js";
import { Fade } from "react-awesome-reveal";

export default function Educations(props) {
	const { theme } = props;
	return (
		<div className="main" id="educations">
			<div className="educations-header-div">
				<Fade bottom duration={2000} distance="20px">
					<h1 className="educations-header" style={{ color: theme.text }}>
						Degrees Received
					</h1>
				</Fade>
			</div>
			<div className="educations-body-div">
				{degrees.degrees.map((degree, i) => {
					return <DegreeCard key={i} degree={degree} theme={theme} />;
				})}
			</div>
		</div>
	);
}
