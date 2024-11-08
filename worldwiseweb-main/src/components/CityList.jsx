import Spinner from "./Spinner";
import styles from "./CityList.module.css";
import Cityitem from "./Cityitem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  // eslint-disable-next-line react/prop-types
  if (!cities.length) return <Message message="Add your first city" />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <Cityitem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
