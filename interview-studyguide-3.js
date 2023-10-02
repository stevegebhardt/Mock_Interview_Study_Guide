/* 

Make a function called getAllCoins that takes no parameters.
You can use this endpoint: https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false


Return an array that has formatted each coin to have this shape (values depend on the coin): 
  
{
    "name": "Bitcoin",
    "current_price": 20575,
    "price_change_percentage_24h": -0.29773
}



*/

const axios = require("axios");

async function getAllCoins() {
  const BASE_URL =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  try {
    const { data } = await axios.get(`${BASE_URL}`);
    const coinsArray = [];
    data.map((coin) => {
      coinsArray.push({
        name: coin.id,
        current_price: coin.current_price,
        price_change_percentage_24h: coin.price_change_percentage_24h,
      });
    });
    console.log(coinsArray);
  } catch ({ message }) {
    console.log(message);
  }
}

getAllCoins();
