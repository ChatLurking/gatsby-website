import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Heading from './heading';

const Languages = ({ webDev, backend, other }) => (
  <div>
    <Heading title="Web Development" />
    <div style={{ marginTop: '1rem' }}>
      {webDev.map((item, index) => (
        <ListItem key={`webdev-${index}`}>{item}</ListItem>
      ))}
    </div>
    <Heading title="Backend" />
    <div>
      {backend.map((item, index) => (
        <ListItem key={`backend-${index}`}>{item}</ListItem>
      ))}
    </div>
    <Heading title="Other" />
    <div style={{ marginBottom: '1rem' }}>
      {other.map((item, index) => (
        <ListItem key={`other-${index}`}>{item}</ListItem>
      ))}
    </div>
  </div>
);

Languages.propTypes = {
  webDev: PropTypes.array.isRequired,
  backend: PropTypes.array.isRequired,
  other: PropTypes.array.isRequired,
};

export default Languages;

const ListItem = styled.p`
  margin-bottom: 0.2rem;

  &:last-child {
    margin-bottom: 12px;
  }
`;
