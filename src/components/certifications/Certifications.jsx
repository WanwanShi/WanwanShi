import "./Certifications.css";
import { Fade } from "react-awesome-reveal";
import { certifications } from "../../personalInfo";
import CertificationCard from "../certificationCard/CertificationCard";

export default function Certifications(props) {
	const { theme } = props;
	return (
		<div className="main" id="certs">
			<div className="certs-header-div">
				<Fade down duration={2000} triggerOnce>
					<h1 className="certs-header" style={{ color: theme.text }}>
						Certifications
					</h1>
				</Fade>
			</div>
			<div className="certs-body-div">
				{certifications.certifications.map((cert, i) => {
					return <CertificationCard key={i} certificate={cert} theme={theme} />;
				})}
			</div>
		</div>
	);
}
