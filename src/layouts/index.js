import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

require('typeface-lato');
require('typeface-josefin-sans');
import typography from '../utils/typography';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Anne Glines" meta={[]} />
    <TopColor />
    <Wrapper>{children()}</Wrapper>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

const TopColor = styled.div`
  background: #4e85bb;
  padding: 1rem;
  margin-bottom: 1.458rem;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`;
