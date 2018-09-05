let resultsHtml = obj => {
  console.log(obj);

  let successfulResults = idx => {
    let result = "";
    idx.forEach(i => {
      result += `<div class="return-items__entry">
      <div class="return-items__title"><a href="https://www.wikipedia.org/wiki/${i.title
        .replace(/ /g, "_")
        .toLowerCase()}" target="_blank">${i.title}</a></div>
      <div class="return-items__snippet">${i.snippet}</div>
      <div class="return-items__metadata">${Math.round(i.size / 1000)} KB (${
        i.wordcount
      } words)- ${new Date(i.timestamp)}</div>
      </div>`;
    });
    return result;
  };

  let showError = () => {
    return "<p><i>There were no results matching the query. Please check your spelling and try again.</i></p>";
  };

  let post = obj.query.search;
  console.log(post);
  return post === undefined || post.length == 0
    ? showError()
    : successfulResults(post);
};
export default resultsHtml;
