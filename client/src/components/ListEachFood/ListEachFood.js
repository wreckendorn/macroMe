import React from "react";

const ListEachFood = props => (
  <option key={props.id} value={props.ndbid}>{props.food}</option>
);

export default ListEachFood;