import "./Skills.css";
import SoftwareSkill from "../softwareSkills/SoftwareSkill";
import { skills } from "../../personalInfo";
import { Fade } from "react-awesome-reveal";

import desk from "../../assets/images/desk.png";
import database from "../../assets/images/database.png";
import backend from "../../assets/images/backend.png";
import ui from "../../assets/images/ui.png";
function GetSkillSvg(props) {
	if (props.fileName === "desk") return <img src={desk}></img>;
	else if (props.fileName === "database")
		return <img src={database} alt="Database"></img>;
	else if (props.fileName === "backend")
		return <img src={backend} alt="backend"></img>;
	return <img src={ui} alt="ui design"></img>;
}

export default function SkillSection(props) {
	const theme = props.theme;
	return (
		<div>
			{skills.data.map((skill, i) => {
				return (
					<div key={i} className="skills-main-div">
						<Fade direction="left" duration={2000} triggerOnce="true">
							<div className="skills-image-div">
								<GetSkillSvg fileName={skill.fileName} theme={theme} />
							</div>
						</Fade>

						<div className="skills-text-div">
							<Fade direction="right" duration={1000} triggerOnce="true">
								<h1 className="skills-heading" style={{ color: theme.text }}>
									{skill.title}
								</h1>
							</Fade>
							<Fade direction="right" duration={1500} triggerOnce="true">
								<SoftwareSkill logos={skill.softwareSkills} />
							</Fade>
							<Fade direction="right" duration={2000} triggerOnce="true">
								<div>
									{skill.skills.map((skillSentence, i) => {
										return (
											<p
												key={i}
												className="subTitle skills-text"
												style={{ color: theme.secondaryText }}
											>
												{skillSentence}
											</p>
										);
									})}
								</div>
							</Fade>
						</div>
					</div>
				);
			})}
		</div>
	);
}
