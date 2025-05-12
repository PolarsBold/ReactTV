import { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ tvShows, selectedShow }) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!selectedShow) {
    return (
      <section className="show-details">
        <h2>Shows</h2>
        <p>Select an Show.</p>
      </section>
    );
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={tvShows.name}
        episodes={selectedShow.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
