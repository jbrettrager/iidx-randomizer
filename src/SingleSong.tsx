import React from "react";
import "./songarea.css";
import leggendariaIcon from "./img/leggendaria.png";
import anotherIcon from "./img/another.png";
import hyperIcon from "./img/hyper.png";
import normalIcon from "./img/normal.png";
import beginnerIcon from "./img/beginner.png";

export default function SingleSong(props: any) {
  const rerollSong = props.random;
  const selectedSongs = props.selected[0];
  const setSelectedSongs = props.selected[1];
  const displaySelected = props.selected[2];

  let songAreaClass = "";
  let difficultyIcon = "";
  let difficulty = "";
  let difficultyNumber = 0;
  let isLeggendaria = false;
  let isEpolis = false;

  if (props.song.foundDifficulty === "[B]") {
    songAreaClass = "song-area beginner";
    difficulty = "BEGINNER";
    difficultyNumber = props.song.beginnerDiff;
    difficultyIcon = beginnerIcon;
  }
  if (props.song.foundDifficulty === "[N]") {
    songAreaClass = "song-area normal";
    difficulty = "NORMAL";
    difficultyNumber = props.song.normalDiff;
    difficultyIcon = normalIcon;
  }
  if (props.song.foundDifficulty === "[H]") {
    songAreaClass = "song-area hyper";
    difficulty = "HYPER";
    difficultyNumber = props.song.hyperDiff;
    difficultyIcon = hyperIcon;
  }
  if (props.song.foundDifficulty === "[A]") {
    songAreaClass = "song-area another";
    difficulty = "ANOTHER";
    difficultyNumber = props.song.anotherDiff;
    difficultyIcon = anotherIcon;
  }
  if (props.song.foundDifficulty === "[L]") {
    songAreaClass = "song-area leggendaria";
    difficulty = "LEGGENDARIA";
    difficultyNumber = props.song.leggendariaDiff;
    difficultyIcon = leggendariaIcon;
    isLeggendaria = true;
  }
  if (props.song.version === "EPOLIS") {
    isEpolis = true;
  }

  function handleClick() {
    let newSelectedSongs = [...selectedSongs];
    if (newSelectedSongs.length < displaySelected) {
      newSelectedSongs.unshift(props.song);
    }
    else if (newSelectedSongs.length === displaySelected) {
      newSelectedSongs.pop()
      newSelectedSongs.unshift(props.song)
    }
    setSelectedSongs(newSelectedSongs);
    rerollSong(props.song);
  }

  return (
    <div className={songAreaClass} onClick={handleClick}>
      <img className="version-icon" src={props.song.versionIcon}></img>
      <div className="genre">{props.song.genre}</div>
      <div
        className={
          isLeggendaria
            ? "title-leggendaria"
            : isEpolis
            ? "title-epolis"
            : "title"
        }
      >
        {props.song.title}
      </div>
      <div className="artist">{props.song.artist}</div>
      <img className="difficulty" src={difficultyIcon}></img>
      <div className="difficulty-number">{difficultyNumber}</div>
    </div>
  );
}
