import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerse from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain";
// The import * from syntax imports all of the variables that have been exported from a given module.

// import { trees, wildlife } from "./parks/RockyMountain";

export default function ColoradoStateParks() {
  return (
    <div>
      <MesaVerse/>
    </div>
  )
}

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

console.log(RMFunctions.trees);
RMFunctions.wildlife();
RMFunctions.elevation();

// export default ColoradoStateParks;

// import * as RMFunctions from "./parks/RockyMountain";

// import {trees, wildlife} from ".parks/RockyMountain";
// The import { variable } from syntax allows us to access a specific variable by name, and use that variable within our file.

// we can rename any or all of the variables
// import {
//   trees as parkTrees,
//   wildlife as parkWildlife,
// } from "./parks/RockyMountain";


