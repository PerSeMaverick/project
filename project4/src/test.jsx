// import React, { useEffect } from "react";
// import xml2js from "xml2js";

// function test() {
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent?LAWD_CD=11110&DEAL_YMD=202205&serviceKey=FkOoYVr4dD43dtfR%2BDBRdIIjzQCi9DpwtSAxs4KOgktHmxHRqWQqLq6SEN3qPeys5doC0IEgjmsnrdK6LPW3oQ%3D%3D"
//         );
//         const xmlData = await response.text();
//         const parser = new DOMParser();
//         const xml = parser.parseFromString(xmlData, "text/xml");

//         const parseString = xml2js.parseString;

//         parseString(xmlData, (err, result) => {
//           if (err) {
//             console.error(err);
//           } else {
//             const json = JSON.stringify(result);
//             console.log(json);
//           }
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchData();
//   }, []);

//   return <div className="App">{/* ... */}</div>;
// }
// export default test;

/*이 예제에서는 useEffect() hook 내에서 async 함수인 fetchData()를 정의합니다. 이 함수는 try-catch 구문을 사용하여 오류를 처리합니다.
fetch() 함수를 사용하여 XML 데이터가 있는 URL을 가져옵니다. 이후, response.text() 메소드를 사용하여 서버에서 받은 응답 데이터를 텍스트로 변환합니다.
그리고나서, DOMParser() 객체를 사용하여 텍스트를 XML 문서로 파싱합니다.
이후, xml2js 라이브러리의 parseString 함수를 사용하여 XML 데이터를 JSON으로 변환합니다. 변환된 JSON 객체를 JSON.stringify() 함수를 사용하여 JSON 문자열로 변환한 후, 콘솔에 출력합니다.
마지막으로, catch() 메소드를 사용하여 에러가 발생하면 콘솔에 에러 메시지를 출력합니다.
이 예제를 실행하면 console.log(json)이 변환된 JSON 문자열을 출력할 것입니다. 이후에는 필요에 따라 JSON 데이터를 조작하고 사용할 수 있습니다.*/

// async function getDongCode(sidoCode, sigunguCode) {
//   const response = await fetch(`https://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=10&keyword=&confmKey=U01TX0FVVEgyMDIzMDcwMzA0MTYzNjExMTQyNzQ=&resultType=json&currentPage=1&countPerPage=100&keyword=&admCd=${sidoCode}${sigunguCode}`);
//   const data = await response.json();
//   return data.results.juso[0].admCd.slice(0, 5);
// }

import React, { useState, useEffect } from "react";

function App() {
  const [sidoCode, setSidoCode] = useState("11");
  const [sigunguCode, setSigunguCode] = useState("");
  const [sigunguList, setSigunguList] = useState([]);

  useEffect(() => {
    async function fetchSigunguList() {
      const response = await fetch(
        `https://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=10&keyword=&confmKey=U01TX0FVVEgyMDIzMDcwMzA0MTYzNjExMTQyNzQ=&resultType=json&currentPage=1&countPerPage=100&keyword=&admCd=${sidoCode}`
      );
      const data = await response.json();
      setSigunguList(data.results.juso);
    }

    fetchSigunguList();
  }, [sidoCode]);

  async function handleSigunguChange(e) {
    setSigunguCode(e.target.value);
  }

  async function handleSubmit() {
    const response = await fetch(
      `https://www.juso.go.kr/addrlink/addrLinkApi.do?currentPage=1&countPerPage=10&keyword=&confmKey=U01TX0FVVEgyMDIzMDcwMzA0MTYzNjExMTQyNzQ=&resultType=json&currentPage=1&countPerPage=100&keyword=&admCd=${sidoCode}${sigunguCode}`
    );
    const data = await response.json();
    setDongCode(data.results.juso[0].admCd.slice(0, 5));
  }

  return (
    <div>
      <h1>동적 법정동 코드 출력기</h1>
      <label htmlFor="sido">시/도:</label>
      <select
        id="sido"
        value={sidoCode}
        onChange={(e) => setSidoCode(e.target.value)}
      >
        <option value="11">서울특별시</option>
        <option value="26">부산광역시</option>
        <option value="27">대구광역시</option>
        <option value="28">인천광역시</option>
        <option value="29">광주광역시</option>
        <option value="30">대전광역시</option>
        <option value="31">울산광역시</option>
        <option value="36">세종특별자치시</option>
        <option value="41">경기도</option>
        <option value="42">강원도</option>
        <option value="43">충청북도</option>
        <option value="44">충청남도</option>
        <option value="45">전라북도</option>
        <option value="46">전라남도</option>
        <option value="47">경상북도</option>
        <option value="48">경상남도</option>
        <option value="49">제주특별자치도</option>
      </select>
    </div>
  );
}

// <div>
//   <label>시/군/구:</label>
//   <select value={sigunguCode} onChange={handleSigunguChange}>
//     <option value="110">종로구</option>
//     <option value="140">중구</option>
//     <option value="170">용산구</option>
//     <option value="200">성동구</option>
//     <option value="215">광진구</option>
//     <option value="230">동대문구</option>
//     <option value="260">중랑구</option>
//     <option value="290">성북구</option>
//     <option value="305">강북구</option>
//     <option value="320">도봉구</option>
//    </select>
// </div>
