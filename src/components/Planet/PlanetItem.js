import React from 'react'

const PlanetItem = ({planet}) => {
  return (
    <tr>
        <td>{planet.pl_name}</td>
        <td>{planet.releasedate}</td>
        <td>{planet.pl_rade}</td>
    </tr>
  )
}

export default PlanetItem