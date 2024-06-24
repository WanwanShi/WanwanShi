import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard.jsx";
import Button from "../../components/button/Button.jsx";
import GoTopButton from "../../components/goTopButton/GoTopButton.jsx";
import { Fade } from "react-awesome-reveal";
import { greeting, projectsHeader } from "../../personalInfo.js";
import ProjectsData from "../../projects.json";
import "./Projects.css";

import { chosenTheme } from "../../theme.js";
import projects from "../../assets/images/projects.png";
export default function Projects() {
	const theme = chosenTheme;
	return (
		<div
			className="projects-main"
			style={{ backgroundColor: chosenTheme.body }}
		>
			<Header theme={theme} />
			<div className="basic-projects">
				<Fade direction="up" duration={2000} triggerOnce>
					<div className="projects-heading-div">
						<div className="projects-heading-img-div">
							{/* <ProjectsImg theme={theme} /> */}
							<img src={projects} alt="" />
						</div>
						<div className="projects-heading-text-div">
							<h1
								className="projects-heading-text"
								style={{ color: theme.text }}
							>
								{projectsHeader.title}
							</h1>
							<p
								className="projects-header-detail-text subTitle"
								style={{ color: theme.secondaryText }}
							>
								{projectsHeader["description"]}
							</p>
						</div>
					</div>
				</Fade>
			</div>
			<div className="repo-cards-div-main">
				{ProjectsData.data.map((repo) => {
					return <GithubRepoCard key={repo.id} repo={repo} theme={theme} />;
				})}
			</div>
			<Button
				text={"More Projects"}
				className="project-button"
				href={greeting.githubProfile}
				newTab={true}
				theme={theme}
			/>
			<Footer theme={theme} />
			<GoTopButton theme={theme} />
		</div>
	);
}
