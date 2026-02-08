import { CountriesApiItem } from "../types";

export async function getCountries() {
  return (await fetch(
    "https://restcountries.com/v3.1/all?fields=cca2,idd,flag",
  ).then((res) => res.json())) as CountriesApiItem[];
}
