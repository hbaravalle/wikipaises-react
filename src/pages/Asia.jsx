import { Fragment } from "react";
import useFetch from "../hooks/useFetch";

export default function Asia() {
  const { paises, isLoaded } = useFetch(
    "https://restcountries.com/v3.1/region/asia"
  );
  return (
    <>
      {!isLoaded ? (
        <p>Loading</p>
      ) : (
        <div className="listado-paises">
          {paises.map(function (pais) {
            return (
              <div key={pais.cca2} className="pais">
                <img src={pais.flags.png} alt={pais.name.common} />
                <div className="info">
                  <h3>{pais.name.common}</h3>
                  <small>Capital: {pais.capital}</small>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
