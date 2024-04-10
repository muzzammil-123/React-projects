import React, { useRef } from 'react';
import styled from 'styled-components';
import VideoCarousel from './VideoCarousel';
import ModelY from './ModelY';
import ModelX from './ModelX';
import Model3 from './Model3';
import ModelS from './ModelS';
import CyberTruck from './CyberTrucl';
import Solar from './Solar';


export default function Home() {

  return (
    <>
      <VideoCarousel/>
      <ModelY/>
      <Model3/>
      <ModelX/>
      <ModelS/>
      <CyberTruck/>
      <Solar/>
    </>
  );
}

