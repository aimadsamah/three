import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { MeshDistortMaterial, OrbitControls, PerspectiveCamera, RenderTexture, Sphere, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  width: 1000px;
  scroll-snap-align: center;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  width: 50px;
  height: 3px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgrey;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(30px);
    }
  };
`;


const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Think. Make. Solve</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>I enjoy creating delightful, human-centered digital experiences.</Desc>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/* 3d model */}
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={3} />
            <directionalLight position={[7,9,1]} />
            <Sphere args={[1,100,200]} scale={2.7} >
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                destort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src="./img/astronaute.png" />
        </Right>
      </Container>
    </Section>
  )
}

export default Hero
