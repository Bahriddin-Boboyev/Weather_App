import { UilSun } from "@iconscout/react-unicons";
import { iconUrlFromCode } from "@/service/weather-app";
import { formatToLocalTime } from "@/service/weather-app";
import Image from "next/image";
const Degree = (props) => {
  const {
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  } = props.weather;

  return (
    <div>
      <div className="flex justify-around items-center mb-9 mt-9">
        <Image src={iconUrlFromCode(icon)} alt="img" width={100} height={100} />
        <p className="text-white text-5xl font-medium">{`${temp.toFixed(
          0
        )}°`}</p>
        <div>
          <p className="text-white font-mono font-medium">
            Real fell:{" "}
            <span className="font-semibold">{`${feels_like.toFixed(0)}°`}</span>
          </p>
          <p className="text-white font-mono font-medium">
            Humidity:{" "}
            <span className="font-semibold">{`${humidity.toFixed(0)}°`}</span>
          </p>
          <p className="text-white font-mono font-medium">
            Wind: <span className="font-semibold">{`${speed} km/h`}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center">
        <span className="text-white">
          <UilSun />
        </span>
        <p className="text-white font-mono font-medium">
          Rise:{" "}
          <span className="font-semibold">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="text-white mt-[-5px]">|</p>

        <span className="text-white">
          <UilSun />
        </span>
        <p className="text-white font-mono font-medium">
          Set:{" "}
          <span className="font-semibold">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="text-white mt-[-5px]">|</p>
        <span className="text-white">
          <UilSun />
        </span>
        <p className="text-white font-mono font-medium">
          Hight:{" "}
          <span className="font-semibold">{`${temp_max.toFixed(0)}°`}</span>
        </p>
        <p className="text-white mt-[-5px]">|</p>
        <span className="text-white">
          <UilSun />
        </span>
        <p className="text-white font-mono font-medium">
          Low:{" "}
          <span className="font-semibold">{`${temp_min.toFixed(0)}°`}</span>
        </p>
      </div>
    </div>
  );
};

export default Degree 
