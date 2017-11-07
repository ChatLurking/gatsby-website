import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from './heading';

const Work = ({ experience }) => {
  return (
    <div>
      <Heading title="Experience" />
      {experience.map((item, index) => (
        <div key={index}>
          <EmployerDateWrapper>
            <h4>{item.name.toUpperCase()}</h4>
            <p>
              {item.startDate} - {item.endDate}
            </p>
          </EmployerDateWrapper>
          <Title>{item.title.toUpperCase()}</Title>
          <p style={{ marginBottom: '0.5rem' }}>
            {item.languages.map((language, i) => (
              <span key={i}>{language}&nbsp;&nbsp;</span>
            ))}
          </p>
          <ul>
            {item.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

Work.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Work;

export const EmployerDateWrapper = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  h4 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-weight: 300;
    margin: 0;
  }
`;

export const Title = styled.p`
  margin: 0 0 0.5rem;
  font-style: italic;
  font-weight: 300;
  font-size: 1.2rem;
`;
