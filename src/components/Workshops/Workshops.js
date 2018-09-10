import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { COLOR, SPACE } from '../../config.js';
import media from '../../utils/media';
import Container from '../Container';
import Title from './components/Title';
import Content from './components/Content';
import rainbow from './components/Content/workshops.png';

const Wrapper = styled.div`
  background: ${COLOR.light};
  position: relative;
  height: auto;
  overflow: hidden;
  padding-top: ${SPACE[10]}px;

  ${media.sm.css`
    min-height: 45rem;
  `}
`;	

const StyledFlex = styled(Flex)`
  position: relative;
  height: 100%;
  z-index: 1;
`;

const Workshops = () => (
    	  <Wrapper>
   	 			<StyledFlex column justify="flex-start">
			      <Box mt={[0, 8, 8]} pb={[8, 8, 0]}>
			        <Container>
			           <Flex row wrap align="center">
			            <Box width={[1 / 1]}>
        			      <Title />
			            </Box>
			          </Flex>
		            <Content imgMain={rainbow}/>
              </Container>
            </Box>
          </StyledFlex>
      	</Wrapper>
    );


export default Workshops;
