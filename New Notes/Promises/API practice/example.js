const API_KEY = 'EIIO9GQBRxFv2vjg0sMA0uPbDTPrqjnv'; 
const BASE_URL = 'https://api.tomorrow.io/v4';

async function getWeather(lat, lon) {
    const url = `${BASE_URL}/weather/realtime?location=${lat},${lon}&apikey=${API_KEY}`;
    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`API ERROR: ${response.status}`)
        }

        return await response.json();
    } catch (err) {
        console.log(`ERROR: ${err.message}`)
    }
}

async function main() {
  const lat = '45.3029';
  const lon = '-122.7727';
  
  try {
    const weatherData = await getWeather(lat, lon);
    console.log(weatherData.data.values.temperature)
  } catch (error) {
    handleError(error);
  }
}

main();