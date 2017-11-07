import React from 'react';
import styled from 'styled-components';
import { getData } from '../utils/dataHelper';
import About from '../components/about';
import Languages from '../components/languages';
import Work from '../components/work';
import Volunteer from '../components/volunteer';

const Index = ({ data }) => {
  const basicInfo = getData('basicInfo', data);
  const workExperience = getData('workExperience', data);
  const volunteerExperience = getData('volunteerExperience', data);
  return (
    <div>
      <h1 style={{ margin: '0' }}>ANNE GLINES</h1>
      <h3>SOFTWARE ENGINEER</h3>
      <Wrapper>
        <InfoWrapper>
          <About email={basicInfo.email} github={basicInfo.github} />
          <Languages
            webDev={basicInfo.languages.web}
            backend={basicInfo.languages.backend}
            other={basicInfo.languages.other}
          />
        </InfoWrapper>
        <ExperienceWrapper>
          <Work experience={workExperience} />
          <Volunteer experience={volunteerExperience} />
        </ExperienceWrapper>
      </Wrapper>
    </div>
  );
};

export default Index;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  h3 {
    font-family: 'Lato', sans-serif;
    font-weight: 300;
  }

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

const InfoWrapper = styled.div``;
const ExperienceWrapper = styled.div`
  width: 65%;
`;

export const basicInfoQuery = graphql`
  query allDataQuery {
    allDataJson {
      edges {
        node {
          basicInfo {
            name
            github
            website
            email
            languages {
              web
              backend
              other
            }
          }
          workExperience {
            name
            title
            startDate
            endDate
            description
            highlights
            languages
          }
          volunteerExperience {
            name
            title
            startDate
            endDate
            description
            highlights
          }
        }
      }
    }
  }
`;
