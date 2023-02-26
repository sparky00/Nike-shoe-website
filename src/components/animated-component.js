import React from "react";
import styled from "styled-components";
import { NikeCard } from "./nikeCard";
// const AnimatedComponent = () => {
//   return (
//     <div id="scene" className="Box">
//       <h1>Animated</h1>
      
//     </div>
//   );
// };
// export default AnimatedComponent;

// new component......new...............new

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function AnimatedComponent() {
  return (
    <AppContainer>
      <NikeCard />
    </AppContainer>
  );
}
export default AnimatedComponent;