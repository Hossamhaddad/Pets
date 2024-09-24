import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
 margin: 0 16px;
 @media (min-width: 630px) {
    margin: 0 130px;
 }`;
 
function Wraper({children}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Wraper
