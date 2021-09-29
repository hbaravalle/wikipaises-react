import useFetch from "../hooks/useFetch";

export default function Results() {
  const { paises, isLoaded } = useFetch(
    "https://restcountries.com/v3.1/name/{name}"
  );

  return (
    <>
      {!isLoaded ? (
        <p>Loading</p>
      ) : (
        <>
          <h2>Estas son las búsquedas que encontramos...</h2>
          <div class="listado-paises">
            {paises.map(function (pais) {
              return (
                <div key={pais.cca2} class="pais">
                  <img src={pais.flags[1]} alt={pais.name.common} />
                  <div class="info">
                    <h3>{pais.name.common}</h3>
                    <small>Capital: {pais.capital}</small>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}
