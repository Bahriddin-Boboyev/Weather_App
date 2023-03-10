import { Buttons } from "./pages/buttons";
import { Inputs } from "./pages/inputs";
import { Times } from "./pages/times";

export const Header = ({ weather, setQuery, units, setUnits }) => {
  return (
    <header>
      <Buttons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />
      <Times weather={weather} />
    </header>
  );
};
