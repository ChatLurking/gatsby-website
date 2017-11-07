import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Heading = ({ title }) => (
  <Wrapper>
    <p>{title.toUpperCase()}</p>
    <Underline />
  </Wrapper>
);

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  start: PropTypes.string,
  end: PropTypes.string,
};

const Wrapper = styled.div`
  display: block;
  p {
    font-style: italic;
    font-weight: 300;
    font-size: 1.25rem;
    margin-bottom: 12px;
  }
`;

const Underline = styled.div`
  width: 62px;
  border-top: 1px solid #4e85bb;
  margin-bottom: 0.5rem;
`;

export default Heading;
