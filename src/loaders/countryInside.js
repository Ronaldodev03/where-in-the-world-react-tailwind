import { getCountry } from "../data/countries";

export async function loader({ params }) {
  //console.log(params);
  const country = await getCountry(params.countryName);
  //console.log(country);

  if (Object.values(country).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Country not found",
    });
  }
  return country;
}
