import React, { useRef } from "react";
import styled from "styled-components";

import gsap from "gsap";

import { useLayoutEffect } from "react";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--white);
  overflow: hidden;
`;

const TextContainer1 = styled.div`
  width: 100%;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: var(--dark);

  span {
    font-size: var(--fontBig);
    width: 90%;
    font-weight: 600;
    text-transform: capitalize;
  }
  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxl);
    }
  }

  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxl);
    }
  }

  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontld);
    }
  }
`;
const TextContainer2 = styled.div`
  width: 100%;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  color: var(--dark);

  align-self: flex-end;
  text-align: right;

  span {
    font-size: var(--fontxxl);
    width: 80%;
    font-weight: 600;
    text-transform: capitalize;
    text-align: right;
  }

  @media screen and (max-width: 70em) {
    span {
      font-size: var(--fontxxxl);
    }
  }

  @media screen and (max-width: 64em) {
    span {
      font-size: var(--fontxxl);
    }
  }

  @media screen and (max-width: 48em) {
    span {
      font-size: var(--fontlg);
    }
  }
`;
const DesignSection = () => {
  const sectionRef = useRef(null);
  const textOneRef = useRef(null);
  const textTwoRef = useRef(null);

  useLayoutEffect(() => {
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(textOneRef.current, { x: 0 }, { x: "10%" }, "key1")
      .fromTo(textTwoRef.current, { x: 0 }, { x: "-10%" }, "key1");

    return () => {
      if (tl) tl.kill();
    };
  }, []);

  return (
    <Section ref={sectionRef}>
      <TextContainer1 ref={textOneRef}>
        <span>Flaw-less design with strong durability</span>
      </TextContainer1>

      <TextContainer2 ref={textTwoRef}>
        <span>flat-edge design with thoughless glass</span>
      </TextContainer2>
    </Section>
  );
};

export default DesignSection;
