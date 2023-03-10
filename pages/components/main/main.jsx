import Daily from "./daily";
import Degree from "./degree";
import Hourly from "./hourly";

const Main = ({ weather }) => {
  const { name, country, details } = weather;

  return (
    <main>
      <div className="mt-16">
        <p className="text-white text-4xl font-semibold text-center mb-8">
          {`${name}, ${country}`}
        </p>
        <p className="text-white text-center text-xl font-sans">{details}</p>
      </div>

      {weather && (
        <>
          <Degree weather={weather} />
          <Hourly weather={weather} />
          <Daily weather={weather} />
        </>
      )}
    </main>
  );
};

export default Main