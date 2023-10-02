/* 

Write a function called getFormattedCoinData that accepts a coin name. It should make a call to an api endpoint similar to this: https://api.coingecko.com/api/v3/coins/bitcoin

it should return a response that has this format (depending on the coin)
{
    coinName: "Bitcoin",
    genesis_date: "2009-01-03",
    usd_price: 20681, (hint: you'll find the usd price under the market data property somewhere nested in there)
    ath_usd: 69045 (hint: you will also find the ath usd price in the market data property somewhere nested in there),
    price_change_percentage_24h: -0.93073
}

*/

const axios = require("axios");

async function getFormattedCoinData(coin) {
  const BASE_URL = "https://api.coingecko.com/api/v3/coins";

  try {
    const { data } = await axios.get(`${BASE_URL}/${coin}`);
    console.log({
      coinName: data.id,
      genesis_date: data.genesis_date,
      usd_price: data.market_data.current_price.usd,
      ath_usd: data.market_data.ath.usd,
      price_change_percentage_24th:
        data.market_data.price_change_percentage_24h,
    });
  } catch ({ message }) {
    console.log(message);
  }
}

getFormattedCoinData("bitcoin");
