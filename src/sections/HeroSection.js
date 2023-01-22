import React from "react";
import styled from "styled-components";
import backgroundVideo from "../assets/video/Ink - 21536.mp4";
const Section = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;

  background-color: var(--dark);
  overflow: hidden;
  justify-content: flex-end;
  align-items: center;
`;

const Title = styled.h1`
  position: absolute;
  top: 2rem;
  left: 2rem;

  font-size: var(--fontlg);
  font-family: var(--fontL);
  color: var(--greyLight);

  @media screen and (max-width: 48em) {
    font-size: var(--fontmd);
    color: var(--white);
  }
  @media screen and (max-width: 30em) {
    width: 70%;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  align-items: center;

  background-image: linear-gradient(75deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  z-index: 1;

  @media screen and (max-width: 48em) {
    flex-direction: column;
    background-image: linear-gradient(90deg, var(--gradient));
    align-items: flex-start;
    filter: brightness(1.1);

    & > *:last-child {
      align-self: flex-end;
    }
    height: 60vh;
    padding: 0 1rem;
  }

  span {
    font-size: var(--fontxxxl);
    text-transform: uppercase;
    font-weight: 600;
    padding: 2rem;

    @media screen and (max-width: 64em) {
      font-size: var(--fontxxl);
      padding: 0;
    }
    @media screen and (max-width: 48em) {
      font-size: var(--fontxl);
    }
  }
`;
const VideoContainer = styled.div`
  width: 100vw;
  min-height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }
`;

const HeroSection = () => {
  return (
    <Section>
      <VideoContainer>
        <video src={backgroundVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>

      <Title>iPhone Pro Max</Title>
      <TextContainer>
        <span>So.Cold.</span>
        <span>So.Bold.</span>
      </TextContainer>
    </Section>
  );
};

export default HeroSection;
