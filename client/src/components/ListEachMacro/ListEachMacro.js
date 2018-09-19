import React from "react";

const ListEachMacro = props => (
    <h3 className="list-group-item" id={props.id}>
       {props.children}
    </h3>
);

export default ListEachMacro;