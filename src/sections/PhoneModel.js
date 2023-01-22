import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../components/Scene";
import { Suspense } from "react";
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
`;

const PhoneModel = () => {
  return (
    <Container id="phone-model">
      <Canvas camera={{ fov: 14 }}>
        <ambientLight intensity={1.25} />
        <directionalLight position={[1, 0, 0]} intensity={0.4} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <Environment preset="night" />
      </Canvas>
    </Container>
  );
};

export default PhoneModel;
