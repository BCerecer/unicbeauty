import React from 'react';
import styled from 'styled-components';
import { rem, rgba } from 'polished';

import Heading from '../../../Heading';
import { Flex, Box } from 'grid-styled';
import media from '../../../../utils/media';

import { COLOR, SPACE } from '../../../../config.js';

const Intro = styled.div`
  padding: ${rem(SPACE[5])} ${rem(SPACE[7])};
  margin: 0 -${rem(SPACE[7])};
  text-align: center;
  
  ${media.sm.css`
    padding: ${rem(SPACE[10])} ${rem(SPACE[10])};  
    background-color: ${rgba(COLOR.white, 0.9)};
  `}
  
  ${media.md.css`
    margin-right: 0;
  `}
`;

const mark ={
  backgroundColor: '#ffe8ec',
  display: 'inline-block', 
       height: '1.15em',
       lineHeight: '1.15' 
}
const Title = () => (
  <Flex wrap row px={0} mx={-5} pt={[0, 0, 9]}>
    <Box width={[1]} px={5} mb={[0, 4, 4]}>
      <Intro>
        <Heading heavy as="h1" color="black" fontSize={[5, 6]} mb={7}>
          <p> A <mark style={mark}>unic</mark> makeup for a unique <mark style={mark}>beauty</mark> </p>
        </Heading>
      </Intro>
    </Box>
  </Flex>
);

export default Title;
