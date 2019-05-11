import styled from "styled-components";

const SSkeletonPulse = styled.div`
  animation: pulse 1.2s ease-in-out infinite;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  display: inline-block;
  height: 100%;
  width: 100%;

  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }

    100% {
      background-position: -135% 0%;
    }
  }
`;

export const SSkeletonLine = styled(SSkeletonPulse)`
  border-radius: 5px;

  &::before {
    content: "\00a0";
  }
`;
