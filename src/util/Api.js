export function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    Promise.reject(`Error ${response.status}`);
  }
}

export function getData() {
  return fetch("http://www.omdbapi.com/?apikey=ff893278&s=bond")
    .then(checkResponse);
}

export function getSearch(keyWords) {
  return fetch(`http://www.omdbapi.com/?apikey=ff893278&s=${keyWords}`)
  .then(checkResponse);
}

