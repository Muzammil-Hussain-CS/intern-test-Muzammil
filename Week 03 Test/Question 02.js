async function fetchWithRetry(url, retries) {
  for (let atmpt = 1; atmpt <= retries; atmpt++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Got hhttp Eror: ${response.status}`);
      }
      return await response.text();
    } catch (error) {
      if (atmpt === retries) {
        throw error;
      }
      console.log(`Attmept no: ${atmpt}`);
      await new Promise((resolve) => setTimeout(resolve, atmpt * 1000));
    }
  }
}
const apiurl = "MuzammilApi.com";
const retries = 3;
fetchWithRetry(apiurl, retries);
