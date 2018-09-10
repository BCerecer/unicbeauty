import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { COLOR } from '../../config.js';
import media from '../../utils/media';
import Container from '../Container';
import Title from './components/Title';
import Content from './components/Content';
import rainbow from './components/Content/rainbow.png';
import unicornLogo from './components/Content/uniclogosmall.svg';

const Wrapper = styled.div`
  background: ${COLOR.light};
  position: relative;
  height: auto;
  overflow: hidden;

  ${media.sm.css`
    min-height: 56rem;
  `}
`;	

const StyledFlex = styled(Flex)`
  position: relative;
  height: 100%;
  z-index: 1;
`;

const Home = () => (
    	  <Wrapper>
          <StyledFlex column justify="flex-start">
			      <Box mt={[0, 8, 8]} pb={[8, 8, 0]}>
			        <Container>
			          <Flex row wrap align="center">
			            <Box width={[1 / 1]}>
        			      <Title />
			            </Box>
			          </Flex>
		            <Content imgMain={rainbow} imgTop={unicornLogo}/>
              </Container>
            </Box>
          </StyledFlex>            
      	</Wrapper>
    );


export default Home;
