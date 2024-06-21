import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GoTopButton from "../../components/goTopButton/GoTopButton";
import "./Experience.css";
import { experience } from "../../personalInfo.js";
import { Fade } from "react-awesome-reveal";
import ExperienceImg from "./ExperienceImg";
import ExperienceAccordion from "../../components/experienceAccordion/ExperienceAccordion.jsx";
import { chosenTheme } from "../../theme.js";

export default function Experience() {
	const theme = chosenTheme;
	return (
		<div
			className="experience-main"
			style={{ backgroundColor: chosenTheme.body }}
		>
			<Header theme={theme} />
			<div className="basic-experience">
				<Fade bottom duration={2000} triggerOnce>
					<div className="experience-heading-div">
						<div className="experience-heading-img-div">
							{/* <img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
							<ExperienceImg theme={theme} />
						</div>

						<div className="experience-heading-text-div">
							<h1
								className="experience-heading-text"
								style={{ color: theme.text }}
							>
								{experience.title}
							</h1>
							<h3
								className="experience-heading-sub-text"
								style={{ color: theme.text }}
							>
								{experience["subtitle"]}
							</h3>
							<p
								className="experience-header-detail-text subTitle"
								style={{ color: theme.secondaryText }}
							>
								{experience["description"]}
							</p>
						</div>
					</div>
				</Fade>
			</div>
			<ExperienceAccordion sections={experience["sections"]} theme={theme} />
			<Footer theme={theme} />
			<GoTopButton theme={theme} />
		</div>
	);
}
