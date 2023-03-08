import React, { useState, useCallback, useEffect } from "react";

// import style from "./RealEstate.module.css";

import XMLParser from "react-xml-parser";

import Fallen from "./RealEstate/Fallen";
import Fluctuation from "./RealEstate/Fluctuation";

const RealEstate = () => {
  const [realEstate, setRealEstate] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const parseStr = useCallback((dataSet) => {
    const dataArr = new XMLParser().parseFromString(dataSet).children;
    console.log(dataArr);
  });

  const fetchRealEstateHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    const regionCode = 11110;
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const dateString = `${year}${month}`;

    const url = new URL(
      `http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent?LAWD_CD=${regionCode}&DEAL_YMD=${dateString}&serviceKey=FkOoYVr4dD43dtfR%2BDBRdIIjzQCi9DpwtSAxs4KOgktHmxHRqWQqLq6SEN3qPeys5doC0IEgjmsnrdK6LPW3oQ%3D%3D`
    );
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Someting went wrong!");
      }
      const xmlData = await response.data;

      parseStr(xmlData, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          const json = result.json();
          console.log(json);
          setRealEstate(json);
          setIsLoading(false);
        }
      });
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchRealEstateHandler();
  }, [fetchRealEstateHandler]);

  let estateContent = <h2>Found no Information</h2>;

  if (realEstate.length > 0) {
    estateContent = (
      <div>
        <Fallen data={realEstate} />
        <Fluctuation data={realEstate} />;
      </div>
    );
  }
  if (!isLoading) {
    estateContent = <h2>Loading...</h2>;
  }
  if (error) {
    estateContent = <p>{error}</p>;
  }

  return { estateContent };
};

export default RealEstate;
