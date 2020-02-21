export default function(search, current, callback) {
  const key = '15315840-46f26c39a26eaa327dca45469';
  const baseUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${search}&page=${current}&per_page=12&key=${key}`;
  fetch(baseUrl)
    .then(data => data.json())
    .then(data => callback(data))
    .then(() =>
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      }),
    )
    .catch(error => console.log(error));
}
