import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import animationData from './scrollanimation.json';

const ButtonWrapper = styled.button`
  --size: 30px;
  width: var(--size);
  height: var(--size);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  background-color: #fff;
  border: 0;
  padding: 0;
  cursor: pointer;
  outline: 0;

  .animation {
    pointer-events: none;
  }
`;

export const ScrollButton = () => {
  const [animationState, setAnimationState] = useState({
    isStopped: true, isPaused: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };


  return (
    <>
      <AnchorLink href='#about-anchor' className="nav-item">
        <ButtonWrapper onClick={() => {
          setAnimationState({
            ...animationState,
            isStopped: false,
            direction: animationState.direction === 1
          })
        }}>
          <div className="animation">
            <Lottie
              options={defaultOptions}
              width={100}
              height={100}
              direction={animationState.direction}
              isStopped={animationState.isStopped}
              isPaused={animationState.isPaused} />
          </div>
        </ButtonWrapper>
      </AnchorLink>
    </>
  );
}


ReactDOM.render(
  <div>
    <ScrollButton />
  </div>,
  document.getElementById('root')
);