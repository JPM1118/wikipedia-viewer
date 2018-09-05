import fetchApi from "./fetchApi";

const apiCall = () => {
  const resultsPage = document.querySelector("#resultsPage");
  const submit = document.querySelectorAll(".submit");
  const searchHome = document.querySelector("#searchHome");
  const searchResults = document.querySelector("#searchResults");

  submit.forEach(btn => {
    btn.addEventListener("click", clickSubmit);
  });
  document.addEventListener("keypress", enterSubmit);

  function clickSubmit(e) {
    console.log(resultsPage);
    let string;
    e.target.classList.contains("btn")
      ? (string = searchHome.value.toLowerCase())
      : (string = searchResults.value.toLowerCase());
    console.log(searchHome.value);
    console.log(`this is ${string}`);
    fetchApi(string);
    searchHome.value = "";
    searchResults.value = "";
  }

  function enterSubmit(el) {
    if (
      el.key === "Enter" &&
      (document.activeElement === searchHome ||
        document.activeElement === searchResults)
    ) {
      let keyword;
      document.activeElement === searchHome
        ? (keyword = searchHome.value.toLowerCase())
        : (keyword = searchResults.value.toLowerCase());
      //console.log(keyword);
      fetchApi(keyword);
      searchHome.value = "";
      searchResults.value = "";
    }
  }
};

export default apiCall;
