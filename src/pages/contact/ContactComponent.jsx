import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import GoTopButton from "../../components/goTopButton/GoTopButton.jsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import Button from "../../components/button/Button.jsx";
import address from "../../assets/images/address.png";
import { Fade } from "react-awesome-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../personalInfo.js";
import { chosenTheme } from "../../theme.js";
import personal from "../../assets/images/personal.png";
export default function Contact() {
	const theme = chosenTheme;
	const { contactSection, blogSection, addressSection, phoneSection } =
		contactPageData;
	return (
		<div className="contact-main" style={{ backgroundColor: chosenTheme.body }}>
			<Header theme={theme} />
			<div className="basic-contact">
				<Fade direction="up" duration={1000} triggerOnce>
					<div className="contact-heading-div">
						<div className="contact-heading-img-div">
							{/* <img
								src={`../../../skills/${contactSection["profile_image_path"]}`}
								alt=""
							/> */}
							<img src={personal} alt="" />
						</div>
						<div className="contact-heading-text-div">
							<h1
								className="contact-heading-text"
								style={{ color: theme.text }}
							>
								{contactSection["title"]}
							</h1>
							<p
								className="contact-header-detail-text subTitle"
								style={{ color: theme.secondaryText }}
							>
								{contactSection["description"]}
							</p>
							<SocialMedia theme={theme} />
							<div className="resume-btn-div">
								<Button
									text="See My Resume"
									newTab={true}
									href={greeting.resumeLink}
									theme={theme}
								/>
							</div>
						</div>
					</div>
				</Fade>
				{/* <Fade direction="up" duration={1000} triggerOnce>
					<div className="blog-heading-div">
						<div className="blog-heading-text-div">
							<h1 className="blog-heading-text" style={{ color: theme.text }}>
								{blogSection["title"]}
							</h1>
							<p
								className="blog-header-detail-text subTitle"
								style={{ color: theme.secondaryText }}
							>
								{blogSection["subtitle"]}
							</p>
							<div className="blogsite-btn-div">
								<Button
									text="Visit My Blogsite"
									newTab={true}
									href={blogSection.link}
									theme={theme}
								/>
							</div>
						</div>
						<div className="blog-heading-img-div">
							<BlogsImg theme={theme} />
						</div>
					</div>
				</Fade> */}
				<Fade direction="up" duration={1000} triggerOnce>
					<div className="address-heading-div">
						<div className="address-heading-text-div">
							<h1
								className="address-heading-text"
								style={{ color: theme.text }}
							>
								{addressSection["title"]}
							</h1>
							<p
								className="contact-header-detail-text subTitle"
								style={{ color: theme.secondaryText }}
							>
								{addressSection["subtitle"]}
							</p>
							<h1
								className="address-heading-text"
								style={{ color: theme.text }}
							>
								{phoneSection["title"]}
							</h1>
							<p
								className="contact-header-detail-text subTitle"
								style={{ color: theme.secondaryText }}
							>
								{phoneSection["subtitle"]}
							</p>
							<div className="address-btn-div">
								<Button
									text="Visit on Google Maps"
									newTab={true}
									href={addressSection.location_map_link}
									theme={theme}
								/>
							</div>
						</div>
						<div className="contact-heading-img-div">
							{/* <AddressImg theme={theme} /> */}
							<img src={address} alt="" />
						</div>
					</div>
				</Fade>
			</div>
			<Footer theme={theme} />
			<GoTopButton theme={theme} />
		</div>
	);
}
