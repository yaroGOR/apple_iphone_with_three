import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 200vh;

  position: relative;
  display: flex;
  justify-content: space-around;

  flex-direction: column;

  background-color: var(--dark);
  color: var(--white);

  & > *:nth-child(even) {
    align-self: flex-end;
    margin-right: 4rem;

    text-align: right;
    @media screen and (max-width: 48em) {
      margin-right: 1rem;
    }
  }

  & > *:nth-child(odd) {
    margin-left: 4rem;
    text-align: left;
    @media screen and (max-width: 48em) {
      margin-left: 1rem;
    }
  }
`;

const MainTitle = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }

  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
`;
const TextBlockRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 50%;
`;
const TextBlockLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

const Title = styled.div`
  font-size: var(--fontlg);
  margin-bottom: 1rem;
`;
const Text = styled.div`
  font-size: var(--fontxs);
  margin-bottom: 0.5rem;
  color: var(--grayLight);
  width: 55%;

  @media screen and (max-width: 64em) {
    width: 70%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxs);
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: rotate(-25deg);
  z-index: 1;
  margin-bottom: 4rem;
  align-items: center;
`;

const MovingText = styled.h1`
  font-size: var(--fontBig);
  font-family: var(--fontL);
  background-image: linear-gradient(-45deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }

  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }

  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
  @media screen and (max-width: 40em) {
    font-size: var(--fontlg);
  }
  @media screen and (max-width: 30em) {
    font-size: var(--fontmd);
  }
`;

const DisplaySection = () => {
  const textBlockRef = useRef(null);
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: textBlockRef.current,

          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(textOneRef.current, { x: 0 }, { x: "20%" }, "key1")
      .fromTo(textTwoRef.current, { x: 0 }, { x: "-20%" }, "key1");

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section>
      <MainTitle>
        {" "}
        Immersive <br /> display
      </MainTitle>
      <TextBlockRight>
        <Title>Super Retina XDR display</Title>
        <Text>
          Eu et velit nulla non do reprehenderit aliquip dolore occaecat sint
          eu. Occaecat enim consequat est dolor anim elit anim magna esse ea
          magna. Occaecat cupidatat ad id minim. Incididunt id dolor do sit
          laborum aliqua dolore quis aliquip non excepteur dolore.
        </Text>
      </TextBlockRight>
      <TextBlockLeft ref={textBlockRef}>
        <Title>Big is better</Title>
        <Text>
          Eu et velit nulla non do reprehenderit aliquip dolore occaecat sint
          eu. Occaecat enim consequat est dolor anim elit anim magna esse ea
          magna. Occaecat cupidatat ad id minim. Incididunt id dolor do sit
          laborum aliqua dolore quis aliquip non excepteur dolore.
        </Text>
      </TextBlockLeft>

      <TextContainer>
        <MovingText ref={textOneRef}>Thoughter than ever!</MovingText>
        <MovingText ref={textTwoRef}>every thouch matters</MovingText>
      </TextContainer>
    </Section>
  );
};

export default DisplaySection;
