const API_KEY = process.env.REACT_APP_API_KEY;

export function checkResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    Promise.reject(`Error ${response.status}`);
  }
}

export function getData() {
  return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=friends`)
    .then(checkResponse);
}

export function getSearch(keyWords, type) {
  return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${keyWords}${type && `&type=${type}`}`)
  .then(checkResponse);
}
