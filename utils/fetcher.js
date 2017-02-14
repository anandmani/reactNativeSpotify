export default search = (searchText) => {
  const url = `https://api.spotify.com/v1/search?q=${searchText}&type=artist`;
  console.log("fetching from "+ url);
  return fetch(url)
  .then((response) => response.json())
  .then((response) => (response.artists)? response.artists.items : [])
}
