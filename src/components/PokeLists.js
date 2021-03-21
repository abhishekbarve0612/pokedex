import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../customHooks/useFetch";
import ListItem from "./ListItem";

const PokeLists = () => {
  let {page} = useParams(), offset;
  if (page == null) {
    offset = 0;
    page = 0;
  }
  else offset = 15 * parseInt(page);
  console.log(offset);
  page = parseInt(page);
  const API_URL = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=15`;
  const { data:pokemon, isLoading, error} = useFetch(API_URL);
  let pokes = null;
  if (isLoading == false && pokemon != null) {
    console.log(pokemon.results[0]);
    pokes = pokemon.results;
  }
  return ( 
    <>
    <div className="pokelist">
      {error && <h3>{error}</h3> }
      {isLoading && <h3>Loading...</h3>}
      {pokemon && <ListItem pokes={pokes} />}
    </div>
    <div className="pagination">
        {(page - 1) > -1 && 
          <div className="button">
          <Link to={`/${page - 1}`}>Previous</Link>
          </div>
          }
          <div className="button">
            <Link to={`/${parseInt(page)+2}`}>{page + 2}</Link>
          </div>
          <div className="button">
            <Link to={`/${parseInt(page)+3}`}>{page + 3}</Link>
          </div>
          <div className="button">
            <Link to={`/${parseInt(page)+4}`}>{page + 4}</Link>
          </div>
        <div className="button">
          <Link to={`/${parseInt(page) + 1}`}>Next</Link>
        </div>
      </div>
    </>
   );
}
 
export default PokeLists;