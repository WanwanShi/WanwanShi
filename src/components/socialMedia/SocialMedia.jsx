import "./SocialMedia.css";
import { socialMediaLinks } from "../../personalInfo";
import styled from "styled-components";

const IconWrapper = styled.span`
	i {
		background-color: ${(props) => props.backgroundColor};
	}
	&:hover i {
		background-color: ${({ theme }) => theme.text};
		transition: 0.3s ease-in;
	}
`;

export default function SocialMedia(props) {
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
