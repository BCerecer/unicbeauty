import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import media from '../../../../utils/media';
import { rem, rgba } from 'polished';
import { FormattedMessage } from 'react-intl';
import Slide from 'react-reveal/Slide';

import { FONT_FAMILIES, COLOR, SPACE, FONT_SIZES } from '../../../../config.js';

const Paragraph = styled.p`
  font-size: ${rem(FONT_SIZES[4])};
  color: ${COLOR.black};
  font-family: ${FONT_FAMILIES.sans};
  font-weight: 400;
  line-height: 2rem;
  text-transform: none;
  padding-top: auto;
  padding-bottom: auto;
`;

const MainImageBox = styled(Box)`
  height: 100%;
  overflow: hidden;
`;

const StyledBox = styled(Box)`
  position: relative;
`;

const Intro = styled.div`
  padding: ${rem(SPACE[5])} ${rem(SPACE[7])};
  margin: 0 -${rem(SPACE[5])};
  text-align: center;
  
  ${media.sm.css`
    padding: ${rem(SPACE[5])} ${rem(SPACE[7])};  
    background-color: ${rgba(COLOR.white, 0.9)};
  `}
  
  ${media.md.css`
    margin-right: 0;
  `}
`;

const Graphic = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;

  const blockdiv = {
    margin: '20px;',
  }

const Content = ({ imgMain, imgTop }) => (
  <Flex wrap row px={0} mx={-5} pt={[0, 0, 9]}>
    <Box width={[1, 2 / 3, 2 / 3]} my={[3, -3, -3]}>
      <Intro>
        <Paragraph style={blockdiv}>
          <FormattedMessage id="workshops.description" />
        </Paragraph>
       </Intro>
      </Box>
      <MainImageBox width={[1, 1 / 3, 1 / 3]} px={3}>
        <Slide right duration={1500}>
          <Graphic src={imgMain} />
        </Slide>
      </MainImageBox>
    </Flex>
);

Content.propTypes = {
  imgMain: PropTypes.string.isRequired,
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default Content;
