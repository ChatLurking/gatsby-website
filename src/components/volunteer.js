import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from './heading';
import { EmployerDateWrapper } from './work';

const Volunteer = ({ experience }) => (
  <div>
    <Heading title="Volunteer" />
    {experience.map((item, index) => (
      <div key={index}>
        <EmployerDateWrapper>
          <h4>{item.name.toUpperCase()}</h4>
          <p>
            {item.startDate} - {item.endDate}
          </p>
        </EmployerDateWrapper>
        <ul>
          {item.highlights.map((highlight, i) => <li key={i}>{highlight}</li>)}
        </ul>
      </div>
    ))}
  </div>
);

Volunteer.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Volunteer;
