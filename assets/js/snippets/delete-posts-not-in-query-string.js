document.addEventListener('DOMContentLoaded', (event) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  let container = document.getElementById("tag-container");
  for (let tag of container.children) {
    if (urlParams.has('tag')) {
      if (tag.id != "-" + urlParams.get('tag')) {
        tag.innerHTML = '';
      }
    }
  };
});
