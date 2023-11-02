// This function is gonna be imported in loaders/home.
export async function getCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const result = await response.json();
  return result;
}

export async function getCountry(name) {
  //console.log(name);
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
  const result = await response.json();
  return result;
}
