// import ExperienceCard from "../experienceCard/ExperienceCard";
// import "./ExperienceAccordion.css";
// import { Accordion, Panel } from "baseui/accordion";

// export default function ExperienceAccordion(props) {
// 	const { theme, sections } = props;
// 	return (
// 		<div className="experience-accord">
// 			<Accordion>
// 				{sections.map((section) => {
// 					return (
// 						<Panel
// 							className="accord-panel"
// 							title={section["title"]}
// 							key={section["title"]}
// 							overrides={{
// 								Header: {
// 									style: () => ({
// 										backgroundColor: `${theme.body}`,
// 										border: `1px solid`,
// 										borderRadius: `5px`,
// 										borderColor: `${theme.headerColor}`,
// 										marginBottom: `3px`,
// 										fontFamily: "Google Sans Regular",
// 										color: `${theme.text}`,
// 										":hover": {
// 											color: `${theme.secondaryText}`,
// 										},
// 									}),
// 								},
// 								Content: {
// 									style: () => ({
// 										backgroundColor: `${theme.body}`,
// 									}),
// 								},
// 							}}
// 						>
// 							{section["experiences"].map((experience, index) => {
// 								return (
// 									<ExperienceCard
// 										key={index}
// 										totalCards={section["experiences"].length}
// 										experience={experience}
// 										theme={theme}
// 									/>
// 								);
// 							})}
// 						</Panel>
// 					);
// 				})}
// 			</Accordion>
// 		</div>
// 	);
// }

import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Card,
	Typography,
} from "@mui/material";
import ExperienceCard from "../experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ExperienceAccordion(props) {
	const { theme, sections } = props;

	return (
		<div
			className="experience-accord-container"
			style={{ backgroundColor: theme.body }}
		>
			<div className="experience-accord">
				{sections.map((section, sectionIndex) => (
					<>
						<Card key={sectionIndex} className="accord-panel">
							<Accordion>
								<AccordionSummary
									expandIcon={<ExpandMoreIcon />}
									aria-controls={`panel${sectionIndex}-content`}
									id={`panel${sectionIndex}-header`}
									sx={{
										backgroundColor: theme.body,
										border: `1px solid ${theme.headerColor}`,
										borderRadius: "5px",
										color: theme.text,
									}}
								>
									<Typography>{section.title}</Typography>
								</AccordionSummary>
								<AccordionDetails
									id={`panel${sectionIndex}-content`}
									aria-labelledby={`panel${sectionIndex}-header`}
									style={{
										backgroundColor: theme.body,
									}}
								>
									{section.experiences.map((experience, expIndex) => (
										<ExperienceCard
											key={expIndex}
											experience={experience}
											index={expIndex}
											totalCards={section.experiences.length}
											theme={theme}
										/>
									))}
								</AccordionDetails>
							</Accordion>
						</Card>
					</>
				))}
			</div>
		</div>
	);
}
