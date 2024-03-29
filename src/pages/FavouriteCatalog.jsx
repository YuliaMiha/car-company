import { CarsList } from "../components/CarList";
import { CarsFilter } from "../components/CarFilter/CarsFilter";
import { Loader } from "../components/common/Loader";
import { Section } from "../components/common/Section";
import { SectionTitle } from "../components/common/SectionTitle";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectFavourites, selectIsLoading } from "../redux/selectors";
import { filterCarsByMileage } from "../utils/filterCarsByMileage";
import { getFilterValues } from "../utils/getFilterValues";

const FavouriteCatalog = () => {
  const cars = useSelector(selectFavourites);
  const isLoading = useSelector(selectIsLoading);
  const [filteredCars, setFilteredCars] = useState(cars);
  const filterValues = getFilterValues(cars);

  useEffect(() => {
    setFilteredCars(cars);
  }, [cars]);

  const handleMakeChange = (value) => {
    const filteredCarsByMake = cars.filter((car) => car.make === value);
    setFilteredCars(filteredCarsByMake);
  };

  const handlePriceRangeChange = (value) => {
    const filteredCarsByPriceRange = cars.filter(
      (car) => car.rentalPrice === `$${value}`
    );
    setFilteredCars(filteredCarsByPriceRange);
  };

  const handleApplyMileageFilter = (minMileage, maxMileage) => {
    const filteredCars = filterCarsByMileage(cars, minMileage, maxMileage);
    setFilteredCars(filteredCars);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <SectionTitle title="Choose a car from among your favorites" />
        <CarsFilter
          filterValues={filterValues}
          handleMakeChange={handleMakeChange}
          handlePriceRangeChange={handlePriceRangeChange}
          handleApplyMileageFilter={handleApplyMileageFilter}
        />
        <CarsList cars={filteredCars} />
      </Section>
    </>
  );
};

export default FavouriteCatalog;
