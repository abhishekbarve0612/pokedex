import useFetch from "../customHooks/useFetch";
import {useParams, Link} from 'react-router-dom';
const PokemonInfo = () => {
  const {id} = useParams();
  const { data: info, isLoading, error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (info != null) console.log(info);
  return ( 
    <div className="poke-info">
      {info && <div>
      {error && <h3>{error}</h3> }
      {isLoading && <h3>Loading...</h3>}
      {info && <div className="pokemon-info">
        <h1 className="poke-name">
          {info.name}
        </h1>
          <img src={info.sprites.other.dream_world.front_default} alt=""/>
          <div className="description">
            <div className="info-card">
              <h3 className="data">ID</h3>
              <div className="value">{info.id}</div>
            </div>
            <div className="info-card">
              <h3 className="data">Height</h3>
              <div className="value">{info.height}</div>
            </div>
            <div className="info-card">
              <h3 className="data">Weight</h3>
              <div className="value">{info.weight}</div>
            </div>
            <div className="info-card">
              <h3 className="data">Abilities</h3>
              <div className="value">
                <>
                  {info.abilities.map((ability, key) =>(
                    <div id={key}>{ability.ability.name}</div>
                  ))}
                </>
              </div>
            </div>
            <div className="info-card">
              <h3 className="data">Moves</h3>
              <div className="value">
              <>
                  {info.moves.map((move, key) =>(
                    <div id={key}>{move.move.name}</div>
                  ))}
                </>
              </div>
            </div>
            {info.stats.map((stat, key) => (
              <div className="info-card">
                <div className="data">
                  {stat.stat.name}
                </div>
                <div className="value">
                  <div>
                  <span>Base Stat:</span> {stat.base_stat}
                  </div>
                  <div>
                  <span>Effort:</span> {stat.effort}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>}
        </div>}
        <div className="button">
          <Link to="/">Go Back To HOME</Link>
        </div>
    </div>
   );
}
 
export default PokemonInfo;