import { Link } from "react-router-dom";

const ListItem = ({pokes}) => {
  console.log(pokes[1].name);
  return ( 
    <div className="pokemon-lists">
        {pokes.map((poke, key) => (
          <li className="pokemon-item" id={key}>
            <div className="sr-no">{key + 1}.</div>
            <div className="poke-name">
            {poke.name}
            </div>
            <div className="info-button">
            <Link to={`/pokedex/pokemon/${poke.name}`}>Click Here</Link>
            </div>
            </li>
        ))}
    </div>
   );
}
 
export default ListItem;