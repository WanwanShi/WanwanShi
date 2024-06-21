import "./SocialMedia.css";
import { socialMediaLinks } from "../../personalInfo";
import styled from "styled-components";

const IconWrapper = styled.span`
	i {
		background-color: ${(props) => props.backgroundColor};
		transition: background-color 0.3s ease-in;
	}
	&:hover i {
		background-color: ${(props) => props.hoverColor};
	}
`;

export default function socialMedia(props) {
	const theme = props.theme;
	return (
		<div className="social-media-div">
			{socialMediaLinks.map((media, i) => {
				return (
					<a
						key={i}
						href={media.link}
						className={`icon-button`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<IconWrapper
							backgroundColor={media.backgroundColor}
							hoverColor={theme.text}
						>
							<i className={`fa-brands ${media.fontAwesomeIcon}`}></i>
						</IconWrapper>
					</a>
				);
			})}
		</div>
	);
}
