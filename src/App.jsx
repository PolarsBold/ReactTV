import { tvShows } from "./shows/data.js";
import { useState } from "react";
import ShowSelection from "./shows/ShowSelection.jsx";
import ShowDetails from "./shows/ShowDetails.jsx";

export default function App() {
  const [selectedShow, setSelectedShow] = useState();

  return (
    <>
      <header>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails tvShows={tvShows} selectedShow={selectedShow} />
      </main>
    </>
  );
}
