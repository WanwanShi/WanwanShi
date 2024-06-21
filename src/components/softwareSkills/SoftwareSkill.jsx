import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function SoftwareSkill(props) {
	const { logos } = props;
	return (
		<div>
			<div className="software-skills-main-div">
				<ul className="dev-icons">
					{/* {skillsSection.softwareSkills.map((skills) => {
						return (
							<li className="software-skill-inline" name={skills.skillName}>
								<i className={skills.fontAwesomeClassname}></i>
							</li>
						);
					})} */}
					{logos.map((logo) => {
						return (
							<OverlayTrigger
								key={logo.skillName}
								placement={"top"}
								overlay={
									<Tooltip id={`tooltip-top`}>
										<strong>{logo.skillName}</strong>
									</Tooltip>
								}
							>
								<li className="software-skill-inline" name={logo.skillName}>
									{logo.fontAwesomeClassname && (
										<i
											className={`fa-brands fa-${logo.skillName.toLowerCase()}`}
											style={logo.style}
										></i>
									)}
									{!logo.fontAwesomeClassname && (
										<img
											className="skill-image"
											style={logo.style}
											src={`../../../public/skills/${logo.imageSrc}`}
											alt={logo.skillName}
										/>
									)}
								</li>
							</OverlayTrigger>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
