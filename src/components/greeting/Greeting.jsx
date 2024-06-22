import "./Greeting.css";
import SocialMedia from "../socialMedia/SocialMedia";
import Button from "../button/Button";
import { greeting } from "../../personalInfo";
import avatar from "../../assets/images/avatar.png";

import { Fade } from "react-awesome-reveal";

export default function Greeting(props) {
	const theme = props.theme;
	return (
		<Fade direction="up" duration={1000} triggerOnce="true">
			<div className="greet-main" id="greeting">
				<div className="greeting-main">
					<div className="greeting-text-div">
						<div>
							<h1 className="greeting-text" style={{ color: theme.text }}>
								{greeting.title}
							</h1>
							{greeting.nickname && (
								<h2 className="greeting-nickname" style={{ color: theme.text }}>
									( {greeting.nickname} )
								</h2>
							)}
							<p
								className="greeting-text-p subTitle"
								style={{ color: theme.secondaryText }}
							>
								{greeting.subTitle}
							</p>
							<SocialMedia theme={theme} />
							<div className="portfolio-repo-btn-div">
								<Button
									text="⭐ Star Me On Github"
									newTab={true}
									href={greeting.portfolio_repository}
									theme={theme}
									className="portfolio-repo-btn"
								/>
							</div>
							<div className="button-greeting-div">
								<Button text="Contact me" href="/contact" theme={theme} />
								<Button
									text="See my resume"
									newTab={true}
									href={greeting.resumeLink}
									theme={theme}
								/>
							</div>
						</div>
					</div>
					<div className="greeting-image-div">
						<img alt="my avatar" src={avatar} />
					</div>
				</div>
			</div>
		</Fade>
	);
}
