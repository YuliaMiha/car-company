import React from 'react';
import { Section } from '../components/common/Section';
import { SectionTitle } from '../components/common/SectionTitle';
import { HomePageContent } from '../components/HomePageStore/HomePageStore';
import styled from '@emotion/styled';

export const WrapperBackground = styled.section`
  background-image: url('../images/background-car.webp');
  background-size: cover;
  background-position: center center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <WrapperBackground>
      <Section>
        <SectionTitle title="Visit the Car Rental Company" />
        <HomePageContent />
      </Section>
    </WrapperBackground>
  );
};

export default HomePage;
