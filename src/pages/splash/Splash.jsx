import "./Splash.css";
import { useNavigate } from "react-router-dom";
import { chosenTheme } from "../../theme.js";
import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const complexJumpIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px) translateY(-100px) scale(2);
  }
  50% {
    opacity: 0.5;
    transform: translateX(10px) translateY(10px) scale(1.5);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0) scale(1);
  }
`;

const shrink = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.8);
  }
`;

const smoothSpin = keyframes`
  0% {
    transform: rotateY(0) scale(0.8);
  }
  100% {
    transform: rotateY(720deg) scale(0.5);
  }
`;

const SplashContainer = styled.div`
	height: 100px;
	width: 100px;
	display: flex;
	border-radius: 50%;
	position: absolute;
	top: 30%;
	right: 50%;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.body};
`;

const SplashContainerTwo = styled.div`
	height: 100px;
	width: 100px;
	display: flex;
	border-radius: 50%;
	position: absolute;
	top: 30%;
	left: 47%;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.body};
`;

const NameContainer = styled.div`
	display: flex;
	animation: ${(props) =>
		props.startSpin &&
		css`
			${smoothSpin} 2s ease-out forwards;
		`};
	background-color: ${(props) => props.theme.dark};
	border-radius: 20px;
	position: absolute;
	top: 50%;
	padding: 0.5rem;
`;

const Name = styled.span`
	font-size: 3rem;
	font-family: "Google Sans Medium";
	color: ${(props) => props.theme.body};
	display: inline-block;
	animation: ${complexJumpIn} 0.5s ease-out forwards,
		${shrink} 0.25s ease-out forwards 0.5s;
	opacity: 0;
	animation-delay: ${(props) => props.delay};
	margin: 0 0.1rem;
`;

function AnimatedSplash(props) {
	const { theme } = props;
	return (
		<div className="logo_wrapper">
			<div className="screen" style={{ backgroundColor: theme.splashBg }}>
				<SplashAnimation theme={theme} />
			</div>
		</div>
	);
}

const SplashAnimation = ({ theme }) => {
	const [startSpin, setStartSpin] = useState(false);
	const name = "Wanwan Shi";

	useEffect(() => {
		const totalAnimationTime = name.length * 0.2 + 0.75; // Delay for each letter + total animation time
		setTimeout(() => {
			setStartSpin(true);
		}, totalAnimationTime * 1000);
	}, [name.length]);

	return (
		<>
			<SplashContainer theme={theme} />
			<SplashContainerTwo theme={theme} />
			<NameContainer theme={theme} startSpin={startSpin}>
				{name.split("").map((char, index) => (
					<Name key={index} delay={`${index * 0.1}s`} theme={theme}>
						{char}
					</Name>
				))}
			</NameContainer>
		</>
	);
};

export default function Splash() {
	const theme = chosenTheme;
	const [direct, setDirect] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const id = setTimeout(() => setDirect(true), 5500);
		return () => clearTimeout(id);
	}, []);

	useEffect(() => {
		if (direct) {
			navigate("/home");
		}
	}, [direct, navigate]);

	return (
		<div className="splash-main" style={{ backgroundColor: theme.splashBg }}>
			<AnimatedSplash theme={theme} />
		</div>
	);
}
