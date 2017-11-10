import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from './heading';

const About = ({ email, github }) => (
  <Wrapper>
    <Heading title="About" />
    <AboutItems>
      <a target="__blank" href="mailto:anneglines@gmail.com">
        <i className="fa fa-envelope-o" aria-hidden="true" />
        <p>{email.toUpperCase()}</p>
      </a>
      <a target="__blank" href="https://www.github.com/chatlurking">
        <i className="fa fa-github" aria-hidden="true" />
        <p>{github.toUpperCase()}</p>
      </a>
    </AboutItems>
  </Wrapper>
);

About.propTypes = {
  email: PropTypes.string,
  github: PropTypes.string,
};

const Wrapper = styled.div``;

const AboutItems = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    margin: 1rem 0;

    &:hover {
      color: #396795;
    }
  }

  i {
    margin-right: 0.5rem;
  }

  p {
    margin: 0;
  }
`;

export default About;
