import React from "react";
import HeroImg from "../../Assets/hero_image.png";
import styled from "styled-components";

function Hero() {
	return (
		<HeroDiv>
			{/* <nav>
					<ul>
					<li><a href='#'>Members</a></li>
					<li><a href='#'>Projects</a></li>
					<li><a href='#'>Education</a></li>
					<li><a href='#'>Social</a></li>
					</ul>
			</nav> */}
			<Content>
				<LeftDiv>
					<Text>
						<h4>Your</h4>
						<h4>Favorite</h4>
						<h4 class='purple-text'>Open</h4>
						<h4 class='purple-text'>Source</h4>
						<h4>Community</h4>
					</Text>
					<h1>FearlessTech</h1>
				</LeftDiv>
				<RightDiv>
					<img src={HeroImg} alt='Wolf Silhouette' />
				</RightDiv>
			</Content>
		</HeroDiv>
	);
}

export default Hero;


const HeroDiv = styled.div`
  min-height: 100vh;
  background-position: center;
	* {
		color: white;
		box-sizing: border-box;
	} 
`;

const Content = styled.div`
  padding: 2rem 6rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LeftDiv = styled.div`
  z-index: 50;
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 2rem;
	min-height: 100vh;
	margin-left: 10rem;
	h1 {
		font-weight: 900;
		font-size: 100px;
		font-family: 'Righteous', cursive;
		background: linear-gradient(var(--ft_purple), var(--ft_cyan));
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		letter-spacing: 5px;
	}
`;

const Text = styled.div`
  display: flex;
	flex-direction: column;
	row-gap: 0.6rem;
	margin-bottom: 1rem;
	h4 {
		display: block;
		font-weight: 300;
		font-size: 54px;
		color: var(--GREEN_HERO_TEXT);
		margin-left: 3rem;
		&.purple-text {
			color: var(--PURPLE_HERO_TEXT);
		}
`;

const RightDiv = styled.div`
  min-height: 100vh;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  position: absolute;
  top: 0;
  left: 0;
  padding: 2rem 10rem;
`;
