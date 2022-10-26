/* eslint-disable */

const API_KEY =
  "9522b7799b2a85f3a42a0dd549e8604152d47246fb47599b5683d2d1a19681a9";

//TODO: refactor to use URLSearchParams
export const loadTickers = tickers =>
    fetch(
        `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(',')}&tsyms=USD&api_key=${API_KEY}`
    )
        .then(r => r.json())
        .then(rawData =>
            Object.fromEntries(
                Object.entries(rawData).map(([key, value]) => [key, value.USD])
            )
        );
