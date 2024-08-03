import React from "react";
import * as RRweb from "rrweb";
import data from "./combined_data.json";

const events = data.values.slice(0, 1330);


const replayContainer = document.getElementById("replay-container");
const replayer = new RRweb.Replayer(events, {
  root: replayContainer ?? document.body,
  speed: 8,
  triggerFocus: false
});
replayer.on("event-cast", (event) => {
  console.log(event?.sequence_number, "event");
  replayer.resetCache();
});
replayer.play();
// 1320
// 2024-07-28 15:14:05.854828+0530

function Replayer() {
  return <div id="replay-container"></div>;
}

export default Replayer;
