import React, { Component } from 'react';
import Container from '../Container';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import request from 'superagent';
import { FormattedMessage } from 'react-intl';

import { COLOR, SPACE } from '../../config.js';
import media from '../../utils/media';
import Heading from '../Heading';

const Wrapper = styled.div`
  background: ${COLOR.light};
  position: relative;
  height: auto;
  overflow: hidden;
  padding-bottom: ${SPACE[10]}px;

  ${media.sm.css`
    min-height: 48rem;
  `}
`;  

const Graphic = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

  const link = {
   color:'black',
   textDecoration: 'none', 
   backgroundColor: 'none',
  }

class InstaPics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    }
  }
  componentWillMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    request
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=' + process.env.REACT_APP_ACCESS_TOKEN +'&count=6')
      .then((res) => {
        this.setState({
          photos: res.body.data
        })
      })
  }

  render() {
    const photos = this.state.photos.map((photo, key) => {
      return (
        <a href={photo.link}>
          <Graphic src={photo.images.standard_resolution.url} alt={photo.caption}/>
        </a>
      )
    });

    return (
        <Wrapper>
          <Container>
          <Heading heavy as="h1" color="black" style={{textAlign: 'center'}} fontSize={[5, 6]} mb={7}>
            <a href="https://www.instagram.com/explore/tags/unicbeautygirl/" style={link}>
              <FormattedMessage id="models.title" />
            </a>
          </Heading>
          <Flex>
              <Box width={1/3} px={1}>
                {photos[0]}  
              </Box>
              <Box width={1/3} px={1}>
                {photos[1]}  
              </Box>
              <Box width={1/3} px={1}>
                {photos[2]}  
              </Box>
          </Flex>
          <br></br>
          <Flex flexWrap='wrap'>
              <Box width={1/3} px={1}>
                {photos[3]}  
              </Box>
              <Box width={1/3} px={1}>
                {photos[4]}  
              </Box>
              <Box width={1/3} px={1}>
                {photos[5]}  
              </Box>
          </Flex>
          </Container>
        </Wrapper>
    );
  }
}

export default InstaPics;
