import React, { useState, useCallback, useEffect } from "react";

import style from "./App.module.css";

import ContentsProvider from "./Context/ContentsProvider";
import Sidebar from "./Component/Side/Sidebar";
import Contents from "./Component/Side/Contents";

function App() {
  const [news, setNews] = useState([]);
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

  useEffect(() => {
    fetchNewsHandler();
  }, [fetchNewsHandler]);

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
  };

  return (
    <ContentsProvider data={fetchedData} className={style.content}>
      <Sidebar />
      {content}
    </ContentsProvider>
  );
}

export default App;
