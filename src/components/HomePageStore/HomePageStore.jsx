import {
  HomePageButtonWrapper,
  HomePageLink,
  HomePageText,
  HomePageTitle,
  HomePageWrapper,
} from './HomePageStore.styles';

export const HomePageContent = () => {
  return (
    <HomePageWrapper>
      <HomePageTitle>Сhoose a car for today</HomePageTitle>
      <HomePageText>
        A car makes it possible to keep up, to move around the city comfortably,
        to raise a person's status in the eyes of his clients or business
        partners. If you are not yet planning to buy your car or have given the
        vehicle in for repairs, car rental will come to your aid. Do you need a
        car for rent? Our site offers to rent a car on the most favorable terms.
        Our fleet includes modern, reliable vehicles that are regularly
        inspected and serviced in a timely manner. You can choose the
        appropriate model by studying the catalog.
      </HomePageText>
      <HomePageButtonWrapper>
        <HomePageLink to="/catalog">Explore Cars</HomePageLink>
        <HomePageLink to="/favorites">My Favourites</HomePageLink>
      </HomePageButtonWrapper>
    </HomePageWrapper>
  );
};
