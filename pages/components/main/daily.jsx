import { iconUrlFromCode } from "@/service/weather-app";
import Image from "next/image";

const Daily = ({ weather }) => {
  const { daily } = weather;

  return (
    <div>
      <h2 className="text-white font-semibold text-xl mt-8 mb-3 uppercase">
        Daily Forecast
      </h2>

      <hr className="border-[1px] mb-3" />
      <ul className="flex justify-between items-center">
        {daily?.map((item) => (
          <li key={item.title} className="text-center">
            <p className="text-white mb-2">{item.title}</p>
            <Image
              className="mb-2 w-9 h-9 mx-auto"
              src={iconUrlFromCode(item.icon)}
              alt="img"
              width={36}
              height={36}
            />
            <h4 className="text-white mb-2 font-semibold">
              {`${item.temp.toFixed()}°`}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Daily;
