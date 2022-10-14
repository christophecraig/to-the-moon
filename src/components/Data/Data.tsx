const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export const getPrice = async () => {
  return await CoinGeckoClient.ping();
};
