import { Loader } from '../../components/common/Loader';
import { Navigation } from '../Navigat';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ContentContainer, Header, Main } from './SharLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </Suspense>
      </Main>
    </>
  );
};
