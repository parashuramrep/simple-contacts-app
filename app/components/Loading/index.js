import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export default styled.span`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  text-align: center;
  color: #2A6496;

  .fa {
     animation: ${rotate360} 2s linear infinite;
     display: block;
     margin-left: 20px;
  }
`;
