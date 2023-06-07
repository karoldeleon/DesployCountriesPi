const { Country } = require('../db');

const getApiData = async () => {
  try {
    let response = await fetch("https://restcountries.com/v3/all/");
    let countries = await response.json();
    await countries.map((country) => {
      let pais = {
        id: country.cca3,
        name: country.name.common,
        image: country.flags[1],
        continents: country.continents[0],
        capital: country.capital ? country.capital[0] : "El país no tiene capital",
        subregion: country.subregion ? country.subregion : "El país no tiene subregión",
        area: country.area,
        region: country.region,
        population: country.population,
      };
      Country.findOrCreate({ where: pais });
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = getApiData;
