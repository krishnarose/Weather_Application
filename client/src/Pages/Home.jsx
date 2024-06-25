import React, { useState } from "react";
import sun from "../assets/sun.gif";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";
import { ImSpinner3 } from "react-icons/im";

const Home = () => {
  const [value, setValue] = useState("london");
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=c7b63df0236f41689513cba5bc288cf4`
      );
      setTimeout(() => {
        setLoading(false);
        setTemp(resp.data.main.temp);
        setCity(resp.data.name);
        setDesc(resp.data.weather[0].description);
      }, 5000);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <>
      <div className="p-5 flex justify-center items-center ">
        <img src={sun} className="w-20" alt="Sun" />
      </div>

      <div className=" flex justify-center items-center   ">
        <div className=" w-[350px] h-[300px] rounded-3xl flex items-center justify-center shadow-xl flex-col text-Black bg-zinc-200">
          <div className="flex items-center">
            <h1 className="font-semibold text-2xl  ">Find Weather</h1>
            <TiWeatherPartlySunny className="text-yellow-500 text-4xl animate-pulse font-semibold ml-5" />
          </div>
          <div>
            <input
              className="p-2 mt-4 w-[250px] border border-black text-xl font-semibold rounded-xl bg-zinc-100 hover:bg-zinc-200 cursor-pointer shadow-xl "
              type="text"
              placeholder="Enter Your City Name"
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
          <button onClick={getWeather}>
            {" "}
            {loading ? (
              <>
                {" "}
                <div className="mt-11">
                  <ImSpinner3 className="text-3xl animate-spin" />{" "}
                </div>
              </>
            ) : (
              <>
                <div className="mt-6">
                  <span className="bg-blue-500 px-3 py-2 rounded-xl font-semibold text-white hover:bg-blue-600 curser-pointer">
                    Check Weather
                  </span>
                </div>
              </>
            )}
          </button>
          {temp ? (
            <>
              <div className="p-2">
                <h2>
                  The current wather of{" "}
                  <span className="text-xl font-semibold text-sky-500">
                    {city}
                  </span>{" "}
                  is{" "}
                  <span className="text-2xl font-semibold text-sky-500">
                    {temp}
                  </span>{" "}
                  <span className="text-2xl font-bold text-green-500">°</span>{" "}
                  <span className="text-2xl font-bold text-red-500"> C </span>{" "}
                  and it has{" "}
                  <span className="text-2xl font-semibold text-sky-500">
                    {desc}
                  </span>{" "}
                  Cloud.{" "}
                </h2>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
