import React, {useEffect, useState} from 'react';
import style from './style.module.scss';
import data from './data/discoveries';
import PlanetItem from './PlanetItem';
import { getPlanetsList } from './actions/planets';
import { sortByDate } from './actions/helper';


const PlanetList = () => {

  const [planets, setPlanets] = useState([]);
  const [sortOrder, setSortOrder] = useState('descendingOrder');

// As data can't be access from server due to cors being denied access due to localhost origin
//data is loaded in from a file and **getPlanetsList** which performS a get request to server 
//won't be used
 
  useEffect(() => {
    setPlanets(data);
    sortByDate(data,sortOrder)
  
    return
  }, [planets, sortOrder])



  return (
    <div className={`container-sm ${style.main}`}>
       <h1>Exo Planets discovered by TESS</h1>

       <table className={style.table_container}>
         <thead>
          <tr>
            <th>Planet Name</th>
            <th>Release Date
              <form>
                <select value={sortOrder} onChange={event =>{ setSortOrder(event.target.value); setPlanets([...sortByDate(planets,sortOrder)]) }}>
                  <option value={'ascendingOrder'} selected>Asc</option>
                  <option value={'descendingOrder'} >Desc</option>
                </select>
              </form>
            </th>
            <th>Planet Radius</th>
          </tr>
         </thead>
         <tbody>
          {
            planets.map((planet,index)=>(<PlanetItem planet={planet} key={index}/>))
          }
        </tbody>

       </table>
    </div>
  )
}

export default PlanetList