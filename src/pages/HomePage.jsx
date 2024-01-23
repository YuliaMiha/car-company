import React from 'react';
import { Section } from '../components/common/Section';
import { SectionTitle } from '../components/common/SectionTitle';
import { HomePageContent } from '../components/HomePageStore/HomePageStore';

const HomePage = () => {
  return (
    <Section>
      <SectionTitle title="Visit the Car Rental Company" />
      <HomePageContent />
    </Section>
  );
};

export default HomePage;
