import { Link, NavigationStyled, NavigationWrapper } from './Navigat.styled';

export const Navigation = () => {
  return (
    <NavigationStyled>
      <NavigationWrapper>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/catalog" end>
          Catalog
        </Link>
        <Link to="/favorites" end>
          Favorites
        </Link>
      </NavigationWrapper>
    </NavigationStyled>
  );
};
