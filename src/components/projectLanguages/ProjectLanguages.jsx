import "./ProjectLanguages.css";

export default function ProjectLanguages(props) {
	const { logos } = props;
	return (
		<div>
			<div className="software-skills-main-div">
				<ul className="dev-icons-languages">
					{logos.map((logo, i) => {
						return (
							<li
								className="software-skill-inline-languages"
								name={logo.name}
								key={i}
							>
								<img
									className="iconify"
									src={`../../../skills/${logo.iconifyClass}`}
									alt={logo.name}
								/>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
