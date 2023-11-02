// This function is gonna be imported in main, then in pages/Home.jsx will be used useLoader hook.
import { getCountries } from "../data/countries";

export async function loader() {
  const countries = await getCountries();
  return countries;
}
