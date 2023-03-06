import React, { useState, useCallback, useEffect } from "react";

import style from "./App.module.css";

import ContentsProvider from "./Context/ContentsProvider";
import Sidebar from "./Component/Side/Sidebar";
import Contents from "./Component/Side/Contents";

import xml2js from "xml2js";

function App() {
  const [news, setNews] = useState([]);
  const [realEstate, setRealEstate] = useState([]);
  // const [stock, setStock] = useState([]);
  // const [books, setBooks] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNewsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://openapi.naver.com/v1/search/new.json" // 주소 바꿨음
      );
      if (!response.ok) {
        throw new Error("Someting went wrong!");
      }
      const data = await response.json();
      console.log([data.result]);
      setNews([data.result]);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, []);

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
      const xmlData = await response.text();
      // const parser = new DOMParser();
      // const xml = parser.parseFromString(xmlData, "text/xml");

      const parseString = xml2js.parseString;

      parseString(xmlData, (err, result) => {
        if (err) {
          console.error(err);
        } else {
          const json = JSON.stringify(result);
          console.log(json);
        }
      });
      setRealEstate([json]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchNewsHandler();
    fetchRealEstateHandler();
  }, [fetchNewsHandler, fetchRealEstateHandler]);

  let content = <h2>Found no News</h2>;

  if (news.length > 0) {
    content = <Contents />;
  }
  if (!isLoading) {
    content = <h2>Loading...</h2>;
  }
  if (error) {
    content = <p>{error}</p>;
  }

  const fetchedData = {
    news: news,
    realEstate: realEstate,
  };

  return (
    <ContentsProvider data={fetchedData} className={style.content}>
      <Sidebar />
      {content}
    </ContentsProvider>
  );
}

export default App;
