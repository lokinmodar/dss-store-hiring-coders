import styled from 'styled-components';

const LinhaHor = styled.div`
  width: 100%;
  height: 1px;
  margin: 0 auto;
  //position: fixed;
  // top: 52px;
  z-index: 3;
  overflow: hidden;
  background: #fff !important;

  &:before {
    content: '';
    position: absolute;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    z-index: 2;
    background: #222;
    background: radial-gradient(
      circle,
      rgba(20, 20, 20, 1) 0%,
      rgba(45, 45, 45, 1) 29%,
      rgba(95, 95, 95, 1) 61%,
      rgba(183, 183, 183, 1) 84%,
      rgba(255, 255, 255, 1) 100%
    );
    animation-timing-function: ease-out;
    animation-delay: 3s;
    animation: scaling 20s;
  }

  @keyframes scaling {
    0% {
      transform: scale(0.5);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export default LinhaHor;
