import Buttons from "./buttons";
import Inputs from "./inputs";
import Times from "./times";

const Header = ({ weather, setQuery, units, setUnits }) => {
  return (
    <header>
      <Buttons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      <Times weather={weather} />
    </header>
  );
};

export default Header;
