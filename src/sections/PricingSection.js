import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import styled from 'styled-components'
import { Model3 } from '../components/Scene3'




const Section = styled.div`
width: 100vw;
height: 100vh;
position: relative;
z-index: 1;

background-color: var(--white);

`

const Phone = styled.div`

    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: grab;

`

const Colors = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
left: 35%;
top:50%;
transform: translate(-50%, -50%);
list-style: none;
`

const Color = styled.li`
width: 1.5rem;
height: 1.5rem;
cursor: pointer;
border-radius: 50%;
background-color: ${props=> props.color};

margin: 0.5rem 0;
border: 1px solid var(--dark);
`
const Container = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`
const Details = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const SubTitle = styled.h2`
    font-size: var(--fontmd);
    font-family: var(--fontR);
`
const Title = styled.h2`
    font-size: var(--fontxl);
    font-family: var(--fontR);
    padding: 0.3rem;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem ;
`

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin: 0;
padding: 0.4rem 1rem ;
border-radius: 50px;

border:none;
outline: none;

background-color: var(--blue);
color: var(--white);
cursor: pointer;

&:hover{
    opacity: 0.7;
}
`


const ButtonLink = styled.a`
    color: var(--blue);
    text-decoration: none;
    margin-left: 1.5rem;

    &:hover{
        text-decoration: underline;
    }



`

const Indicator = styled.div`
font-size: var(--fontsm);
position: absolute;
top: 1rem;
`
const PricingSection = () => {
    const { materials } = useGLTF("/scene.gltf");
    const containerRef = useRef()



    let updateColor = (color, rgbColor) => {
        materials.Body.color.set(color);
        console.log(rgbColor)

        containerRef.current.style.backgroundColor =`rgba(${rgbColor}, 0.4)`

      };
  return (
    <Section>
        <Container ref={containerRef}>
        <Phone>
            <Indicator>360&deg; &#x27F2;</Indicator>
        <Canvas id="model3" camera={{ fov: 12 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[1, 0, 0]} intensity={0.4} />
          <Suspense fallback={null}>
            <Model3 />
          </Suspense>
          <Environment preset="night" />

          <OrbitControls enableZoom={false}/>
        </Canvas>

        <Colors>
            <Color  color='#9BB5CE'  onClick={()=>updateColor('#9BB5CE', "155, 181, 206")}/> 
            <Color  color='#F9E5C9'  onClick={()=>updateColor('#F9E5C9', "249, 229,201")}/> 
            <Color  color='#505F4E'  onClick={()=>updateColor('#505F4E', "80, 95, 78")}/>
            <Color  color='#574f6f'  onClick={()=>updateColor('#574f6f', "87, 79, 111")}/> 
            <Color  color='#A50011'  onClick={()=>updateColor('#A50011', '165, 0, 17')}/> 
            <Color  color='#215E7C'  onClick={()=>updateColor('#215E7C', '33, 94, 124')}/> 
        </Colors>
        </Phone>

    <Details>
        <SubTitle>iPhone</SubTitle>
        <Title> 14 Pro Max</Title>
        <SubTitle>from 1099$*</SubTitle>
        <ButtonContainer>
            <Button>Buy</Button>
            <ButtonLink href="#">Learn more &#x2192;</ButtonLink>
        </ButtonContainer>

    </Details>


        </Container>

    </Section>
  )
}

export default PricingSection