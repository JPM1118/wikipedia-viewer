const screenSwitch = () => {
  const submitBtn = document.querySelector("#submitBtn");
  const homeBtn = document.querySelector("#homeBtn");
  const largeHero = document.querySelector("#largeHero");
  const resultsPage = document.querySelector("#resultsPage");
  const searchHome = document.querySelector("#searchHome");
  const searchResults = document.querySelector("#searchResults");

  submitBtn.addEventListener("click", toggleScreen);
  homeBtn.addEventListener("click", toggleScreen);
  document.addEventListener("keypress", enterPress);

  function toggleScreen() {
    if (largeHero.classList.contains("hidden")) {
      largeHero.classList.remove("hidden");
      resultsPage.classList.add("hidden");
    } else {
      largeHero.classList.add("hidden");
      resultsPage.classList.remove("hidden");
    }
  }

  function enterPress(e) {
    if (e.key === "Enter" && document.activeElement === searchHome) {
      largeHero.classList.add("hidden");
      resultsPage.classList.remove("hidden");
    }
  }
};

export default screenSwitch;
