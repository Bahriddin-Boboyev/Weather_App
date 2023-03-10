import { Buttons } from "./components/buttons";
import { Inputs } from "./components/inputs";
import { Times } from "./components/times";

export const Header = ({ weather, setQuery, units, setUnits }) => {
  return (
    <header>
      <Buttons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      <Times weather={weather} />
    </header>
  );
};
