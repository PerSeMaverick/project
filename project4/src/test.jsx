import React, { useEffect } from "react";
import xml2js from "xml2js";

function test() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptRent?LAWD_CD=11110&DEAL_YMD=202205&serviceKey=FkOoYVr4dD43dtfR%2BDBRdIIjzQCi9DpwtSAxs4KOgktHmxHRqWQqLq6SEN3qPeys5doC0IEgjmsnrdK6LPW3oQ%3D%3D"
        );
        const xmlData = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlData, "text/xml");

        const parseString = xml2js.parseString;

        parseString(xmlData, (err, result) => {
          if (err) {
            console.error(err);
          } else {
            const json = JSON.stringify(result);
            console.log(json);
          }
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return <div className="App">{/* ... */}</div>;
}
export default test;

/*이 예제에서는 useEffect() hook 내에서 async 함수인 fetchData()를 정의합니다. 이 함수는 try-catch 구문을 사용하여 오류를 처리합니다.
fetch() 함수를 사용하여 XML 데이터가 있는 URL을 가져옵니다. 이후, response.text() 메소드를 사용하여 서버에서 받은 응답 데이터를 텍스트로 변환합니다.
그리고나서, DOMParser() 객체를 사용하여 텍스트를 XML 문서로 파싱합니다.
이후, xml2js 라이브러리의 parseString 함수를 사용하여 XML 데이터를 JSON으로 변환합니다. 변환된 JSON 객체를 JSON.stringify() 함수를 사용하여 JSON 문자열로 변환한 후, 콘솔에 출력합니다.
마지막으로, catch() 메소드를 사용하여 에러가 발생하면 콘솔에 에러 메시지를 출력합니다.
이 예제를 실행하면 console.log(json)이 변환된 JSON 문자열을 출력할 것입니다. 이후에는 필요에 따라 JSON 데이터를 조작하고 사용할 수 있습니다.*/
