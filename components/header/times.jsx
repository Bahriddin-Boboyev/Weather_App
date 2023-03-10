import { formatToLocalTime } from "@/service/weather-app";

export const Times = ({weather}) => {
  const { dt, timezone } = weather;
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