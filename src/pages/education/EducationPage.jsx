import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GoTopButton from "../../components/goTopButton/GoTopButton";
import Educations from "../../components/educations/Educations";
import Certifications from "../../components/certifications/Certifications";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../personalInfo";
import { certifications } from "../../personalInfo";
import "./EducationPage.css";
import { Fade } from "react-awesome-reveal";
import { chosenTheme } from "../../theme";

export default function EducationPage() {
	const theme = chosenTheme;
	return (
		<div
			className="education-main"
			style={{ backgroundColor: chosenTheme.body }}
		>
			<Header theme={theme} />
			<div className="basic-education">
				<Fade direction="down" duration={2000} triggerOnce>
					<div className="heading-div">
						<div className="heading-img-div">
							<EducationImg theme={theme} />
						</div>
						<div className="heading-text-div">
							<h1 className="heading-text" style={{ color: theme.text }}>
								Education
							</h1>
							<h3 className="heading-sub-text" style={{ color: theme.text }}>
								Basic Qualification and Certifications
							</h3>
							<CompetitiveSites logos={competitiveSites.competitiveSites} />
						</div>
					</div>
				</Fade>
				<Educations theme={theme} />
				{certifications.certifications.length > 0 ? (
					<Certifications theme={theme} />
				) : null}
			</div>
			<Footer theme={theme} />
			<GoTopButton theme={theme} />
		</div>
	);
}
