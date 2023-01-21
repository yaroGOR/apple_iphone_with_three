import gsap from 'gsap'
import React, { useLayoutEffect, useRef } from 'react'

import styled from 'styled-components'

const Section = styled.section`
width: 100vw;
height: 100vh;
position: relative;

display: flex;

justify-content: flex-end;
align-items: center;
background-color: var(--white);
`

const Title = styled.h1`
position: absolute;
top:50%;
left: 50%;
transform: translate(-55%, -50%);

text-transform: uppercase;
font-size: var(--fontBig);
z-index: 1;


`
const Battery = styled.ul`
position: absolute;
right: 4rem;
list-style: none;
background-color: var(--white);
border: 3px solid var(--dark);
border-radius: 8px;
padding: 0.5rem;
width: 15rem;


li{
    width: 100%;
    height: 5rem;
    background-color: var(--dark);
    background-image: linear-gradient(90deg, var(--gradient));
    &>*:not(:first-child):not(:last-child) {
        margin: 0.5rem 0;
    }
    opacity: 0;


}
`

const BatterySection = () => {
    const batteryRef = useRef(null)

    let elements = gsap.utils.selector(batteryRef)

    useLayoutEffect(() => {
      console.log(elements('li'))

     let tl = gsap.timeline()

      elements("li").forEach((el)=>{
        tl.to(el,
            {
                scrollTrigger: {
                    trigger:el,
                    start:'top center',
                    end:'bottom center',
                    scrub: true,

                },
                opacity:1,

            }
            )
      })
    
      return () => {
        
      };
    }, [])



  return (
    <Section id ="battery">
        <Title>
            Go all day with single charge...
        </Title>
        <Battery ref={batteryRef}>
<li/>
<li/>
<li/>
<li/>
<li/>


        </Battery>


    </Section>
  )
}

export default BatterySection