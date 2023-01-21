import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import v1 from "../assets/video/Scuba Diving - 699.mp4";
import v2 from "../assets/video/Skate - 49791.mp4";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  overflow: hidden;
  background-color: var(--white);
`;
const Video1 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
  z-index: 3;
`;
const Video2 = styled.video`
  position: absolute;
  top: 0;
  right: 40%;
  width: 60%;
  height: auto;

  z-index: 2;
`;

const TitleContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: var(--fontBig);
  z-index: 5;
  text-transform: capitalize;
  z-index: 2;

  &>*:nth-child(2){
    margin-left: 6rem;
  }
  &>*:nth-child(3){
    margin-left: 12rem;
  }
`;
const CameraSection = () => {
  const sectionRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const titleRef = useRef(null);

  let elements = gsap.utils.selector(titleRef);

  useLayoutEffect(() => {
    let Elem = sectionRef.current;
    let video1Elem = videoRef1.current;
    let video2Elem = videoRef2.current;
    gsap.to(Elem, {
      scrollTrigger: {
        trigger: Elem,
        start: "top top",
        end: "bottom+=500 bottom",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    let t2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: Elem,
          start: "top top",
          end: "bottom+=500 bottom",
          scrub: true,
        },
      })
      .to(video1Elem, { scale: 0.3 }, "key1")
      .to(video2Elem, { scale: 0.6 }, "key1");

    elements("h1").forEach((el) => {
      t2.fromTo(
        el,
        {
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        }
      );
    });
    return () => {};
  }, []);

  return (
    <Section ref={sectionRef}>
      <Video1 ref={videoRef1} src={v1} type="video/mp4" autoPlay muted loop />
      <Video2 ref={videoRef2} src={v2} type="video/mp4" autoPlay muted loop />
      <TitleContainer ref={titleRef}>
        <Title>Ready.</Title>
        <Title>Steady.</Title>
        <Title>Action.</Title>
      </TitleContainer>
    </Section>
  );
};

export default CameraSection;
