const cache = {};
const expirationTime = 600000;

export const fetchCachedResults = async (query) => {
  if (query in cache) {
    const { data, timestamp } = cache[query];
    const currentTime = Date.now();
    if (currentTime - timestamp <= expirationTime) {
      // Returns the cached data if it has not expired
      return data;
    } else {
      // Cached data has expired, please clear and refresh it.
      delete cache[query];
    }
  }

  // If there is no cached data or it has expired, make a request to the API.
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?q=${query}`,
  );
  const data = await response.json();

  // Cache new response with current timestamp
  cache[query] = { data, timestamp: Date.now() };

  return data;
};
