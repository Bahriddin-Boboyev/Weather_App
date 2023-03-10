import { formatToLocalTime } from "@/service/weather-app";

const Times = (props) => {
  const { dt, timezone } = props.weather;
  return (
    <div>
      <div className="flex justify-around items-center w-[420px] mx-auto">
        <p className="text-white font-l text-lg">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>
    </div>
  );
};

export default Times;
