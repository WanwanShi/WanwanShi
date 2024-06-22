import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function SoftwareSkill(props) {
	const { logos } = props;
	return (
		<div>
			<div className="software-skills-main-div">
				<ul className="dev-icons">
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
								<li
									className="software-skill-inline"
									name={logo.skillName}
									key={logo.skillName}
								>
									{logo.fontAwesomeClassname && (
										<i
											className={`fa-brands fa-${logo.skillName.toLowerCase()}`}
											style={logo.style}
										></i>
									)}
									{!logo.fontAwesomeClassname && (
										<span>
											<img
												className="skill-image"
												style={logo.style}
												src={`../../../skills/${logo.imageSrc}`}
												alt={logo.skillName}
											/>
										</span>
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
