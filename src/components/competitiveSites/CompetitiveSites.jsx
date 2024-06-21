import "./CompetitiveSites.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function CompetitiveSites(props) {
	const { logos } = props;
	return (
		<div className="competitive-sites-main-div">
			<ul className="dev-icons">
				{logos.map((logo) => {
					return (
						<OverlayTrigger
							key={logo.siteName}
							placement={"top"}
							style={{ marginBottom: "5px" }}
							overlay={
								<Tooltip id={`tooltip-top`}>
									<strong>{logo.siteName}</strong>
								</Tooltip>
							}
						>
							<li className="competitive-sites-inline" name={logo.siteName}>
								<a
									href={logo.profileLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									{/* <span
										className="iconify"
										data-icon={logo.iconifyClassname}
										style={logo.style}
										data-inline="false"
									></span> */}
									<img
										className="iconify"
										style={logo.style}
										src={`../../../skills/${logo.imageSrc}`}
										alt={logo.siteName}
									/>
								</a>
							</li>
						</OverlayTrigger>
					);
				})}
			</ul>
		</div>
	);
}
