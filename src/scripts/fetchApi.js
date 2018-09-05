import resultsHtml from "./resultsHtml";

function fetchApi(str) {
  console.log(`keyword is: ${str}`);
  const apiUrl =
    "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&utf8=1&srsearch=";
  const apiKey = str;
  //console.log(apiUrl + apiKey);
  fetch(apiUrl + apiKey)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      let output = resultsHtml(data);
      console.log("this is output:" + output);
      document.querySelector(".return-items").innerHTML = output;
    });
}

export default fetchApi;
