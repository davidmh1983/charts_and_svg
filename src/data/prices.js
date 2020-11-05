import prices from "./prices.json";

const getPrices = (type) => {
  const typePrices = prices[type];
  let resultsSection = [];
  for(let i=0; i<typePrices.length; i++) {
    const nextChange = parseInt(Object.keys(typePrices[i])[0].split("-")[1]-Object.keys(typePrices[i])[0].split("-")[0]);
    for(let j=0; j<=nextChange; j++) {
      resultsSection.push(Object.values(typePrices[i])[0]);
    }
  }
  return resultsSection;
}

export const getAllPrices = Object.keys(prices).map((key) => {
  return {
    name: key,
    values: getPrices(key)
  }
});