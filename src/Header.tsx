import React from "react";
import "./header.css";
import { Song } from "./types.tsx";

export default function Header(props: any) {
  const csvData = props.props[0];
  const setCsvData = props.props[1];
  const generatedNumber = props.props[2];
  const setGeneratedNumber = props.props[3];
  const levelFilters = props.props[4];
  const setLevelFilters = props.props[5];
  const difficulties = props.props[6];
  const setDifficulties = props.props[7];
  const recentFilter = props.props[8];
  const setRecentFilter = props.props[9];
  const songlist = props.props[10];
  const setSonglist = props.props[11];
  const recentless = props.props[12];
  const setRecentless = props.props[13];
  const randomizedSongs = props.random[0];
  const setRandomizedSongs = props.random[1];
  const pullRandom = props.random[2];
  const selectedSongs = props.selected[0];
  const setSelectedSongs = props.selected[1];

  function handleLevelCheckboxes(e: React.ChangeEvent<HTMLInputElement>) {
    let target = e.target.id;
    let newLevelFilters = [...levelFilters];
    newLevelFilters[0][target] = !newLevelFilters[0][target];
    setLevelFilters(newLevelFilters);
  }
  function handleDifficultyCheckboxes(e: React.ChangeEvent<HTMLInputElement>) {
    let target = e.target.id;
    let newDifficultyFilters = [...difficulties];
    newDifficultyFilters[0][target] = !newDifficultyFilters[0][target];
    setDifficulties(newDifficultyFilters);
  }

  function handleCsvInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setCsvData(e.target.value);
  }

  function parseCSV() {
    console.log(songlist);
  }

  function findIcon(version: string) {
    let foundIcon = "";
    if (version === "1st&substream")
      foundIcon =
        "https://remywiki.com/images/c/cd/Beatmania_IIDX_1st_style.png";
    if (version === "2nd style")
      foundIcon =
        "https://remywiki.com/images/c/c2/Beatmania_IIDX_2nd_style.png";
    if (version === "3rd style")
      foundIcon = "https://remywiki.com/images/d/dc/3_logo.png";
    if (version === "4th style")
      foundIcon = "https://remywiki.com/images/7/77/4_logo.png";
    if (version === "5th style")
      foundIcon = "https://remywiki.com/images/f/fe/5th_style.png";
    if (version === "6th style")
      foundIcon = "https://remywiki.com/images/0/00/6th_style.png";
    if (version === "7th style")
      foundIcon = "https://remywiki.com/images/b/b6/7_logo.png";
    if (version === "8th style")
      foundIcon = "https://remywiki.com/images/1/12/8_logo.png";
    if (version === "9th style")
      foundIcon = "https://remywiki.com/images/3/3d/9_logo.png";
    if (version === "10th style")
      foundIcon = "https://remywiki.com/images/2/2e/10_logo.png";
    if (version === "IIDX RED")
      foundIcon = "https://remywiki.com/images/8/83/RED_logo.png";
    if (version === "HAPPY SKY")
      foundIcon =
        "https://remywiki.com/images/2/2b/Beatmania_IIDX_12_HAPPY_SKY.png";
    if (version === "DistorteD")
      foundIcon =
        "https://remywiki.com/images/7/7d/Beatmania_IIDX_13_DistorteD.png";
    if (version === "GOLD")
      foundIcon = "https://remywiki.com/images/3/39/Picture_2.png";
    if (version === "DJ TROOPERS")
      foundIcon = "https://remywiki.com/images/2/23/ACDJTroopersLogo.png";
    if (version === "EMPRESS")
      foundIcon =
        "https://remywiki.com/images/f/f3/Beatmania_IIDX_16_EMPRESS.png";
    if (version === "SIRIUS")
      foundIcon =
        "https://remywiki.com/images/2/2b/Beatmania_IIDX_17_SIRIUS.png";
    if (version === "Resort Anthem")
      foundIcon =
        "https://remywiki.com/images/9/99/Beatmania_IIDX_18_Resort_Anthem.png";
    if (version === "Lincle")
      foundIcon =
        "https://remywiki.com/images/d/d9/Beatmania_IIDX_19_Lincle.png";
    if (version === "tricoro")
      foundIcon =
        "https://remywiki.com/images/c/c7/Tricoro-logo.png?20150310124931";
    if (version === "SPADA")
      foundIcon =
        "https://remywiki.com/images/thumb/9/95/IIDX_21_SPADA_logo.png/600px-IIDX_21_SPADA_logo.png";
    if (version === "PENDUAL")
      foundIcon =
        "https://remywiki.com/images/thumb/7/7d/PENDUAL.png/600px-PENDUAL.png";
    if (version === "copula")
      foundIcon = "https://remywiki.com/images/5/59/Copula.png";
    if (version === "SINOBUZ")
      foundIcon =
        "https://remywiki.com/images/thumb/9/91/SINOBUZ.png/400px-SINOBUZ.png";
    if (version === "CANNON BALLERS")
      foundIcon =
        "https://remywiki.com/images/thumb/d/d8/IIDX_25_CANNON_BALLERS_logo.png/400px-IIDX_25_CANNON_BALLERS_logo.png";
    if (version === "Rootage")
      foundIcon =
        "https://remywiki.com/images/thumb/b/b2/IIDX_26_Rootage_logo.png/400px-IIDX_26_Rootage_logo.png";
    if (version === "HEROIC VERSE")
      foundIcon =
        "https://remywiki.com/images/thumb/7/7a/Beatmania_IIDX_27_HEROIC_VERSE.png/500px-Beatmania_IIDX_27_HEROIC_VERSE.png";
    if (version === "BISTROVER")
      foundIcon =
        "https://remywiki.com/images/thumb/c/cb/IIDX_28_BISTROVER_Logo.png/400px-IIDX_28_BISTROVER_Logo.png";
    if (version === "CastHour")
      foundIcon =
        "https://remywiki.com/images/thumb/e/ef/IIDX_29_CastHour_Logo.png/400px-IIDX_29_CastHour_Logo.png";
    if (version === "RESIDENT")
      foundIcon =
        "https://remywiki.com/images/thumb/f/ff/IIDX_30_RESIDENT_Logo.png/400px-IIDX_30_RESIDENT_Logo.png";
    if (version === "EPOLIS")
      foundIcon =
        "https://remywiki.com/images/thumb/5/56/IIDX_31_EPOLIS_Logo.png/400px-IIDX_31_EPOLIS_Logo.png";
    return foundIcon;
  }

  function createDb() {
    console.log("DB BEING CREATED!!");
    let songDb: Array<Song> = [];
    const splitted = csvData.split(/\n/);
    splitted.shift();
    while (splitted[0]) {
      let shifted = splitted.shift().split(",");
      let currentSong: Song = {
        title: shifted[1],
        genre: shifted[2],
        artist: shifted[3],
        version: shifted[0],
        beginnerDiff: shifted[5],
        normalDiff: shifted[12],
        hyperDiff: shifted[19],
        anotherDiff: shifted[26],
        leggendariaDiff: shifted[33],
        foundDifficulty: "",
        versionIcon: findIcon(shifted[0]),
        playedDate: new Date(shifted[40].split(" ")[0]).getTime(),
      };
      songDb.push(currentSong);
      setSonglist(songDb);
    }
    songDb.sort((a, b) => a.playedDate - b.playedDate);
    let noRecents: Array<Song> = songDb.slice(0, 1200);
    setRecentless(noRecents);
  }

  function clearPulls() {
    setSelectedSongs([]);
  }

  function addNumber() {
    if (generatedNumber < 10) setGeneratedNumber(generatedNumber + 1);
  }
  function subNumber() {
    if (generatedNumber > 1) setGeneratedNumber(generatedNumber - 1);
  }

  function handleFilter() {
    setRecentFilter(!recentFilter);
  }
  return (
    <div className="header">
      <div className="filters">
        Control Panel
        <div className="level-filter-box">
          <label>
            <input
              type="checkbox"
              id="1"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[1]}
            ></input>
            1
          </label>
          <label>
            <input
              type="checkbox"
              id="2"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[2]}
            ></input>
            2
          </label>
          <label>
            <input
              type="checkbox"
              id="3"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[3]}
            ></input>
            3
          </label>
          <label>
            <input
              type="checkbox"
              id="4"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[4]}
            ></input>
            4
          </label>
          <label>
            <input
              type="checkbox"
              id="5"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[5]}
            ></input>
            5
          </label>
          <label>
            <input
              type="checkbox"
              id="6"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[6]}
            ></input>
            6
          </label>
          <label>
            <input
              type="checkbox"
              id="7"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[7]}
            ></input>
            7
          </label>
          <label>
            <input
              type="checkbox"
              id="8"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[8]}
            ></input>
            8
          </label>
          <label>
            <input
              type="checkbox"
              id="9"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[9]}
            ></input>
            9
          </label>
          <label>
            <input
              type="checkbox"
              id="10"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[10]}
            ></input>
            10
          </label>
          <label>
            <input
              type="checkbox"
              id="11"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[11]}
            ></input>
            11
          </label>
          <label>
            <input
              type="checkbox"
              id="12"
              onChange={handleLevelCheckboxes}
              checked={levelFilters[12]}
            ></input>
            12
          </label>
        </div>
        <div className="difficulty-filter">
          <label>
            <input
              type="checkbox"
              id="beginner"
              onChange={handleDifficultyCheckboxes}
              checked={difficulties["beginner"]}
            ></input>
            B
          </label>
          <label>
            <input
              type="checkbox"
              id="normal"
              onChange={handleDifficultyCheckboxes}
              checked={difficulties["normal"]}
            ></input>
            N
          </label>
          <label>
            <input
              type="checkbox"
              id="hyper"
              onChange={handleDifficultyCheckboxes}
              checked={difficulties["hyper"]}
            ></input>
            H
          </label>
          <label>
            <input
              type="checkbox"
              id="another"
              onChange={handleDifficultyCheckboxes}
              checked={difficulties["another"]}
            ></input>
            A
          </label>
          <label>
            <input
              type="checkbox"
              id="leggendaria"
              onChange={handleDifficultyCheckboxes}
              checked={difficulties["leggendaria"]}
            ></input>
            L
          </label>
        </div>
        <label>
          <input
            type="checkbox"
            id="recent-filter"
            onClick={handleFilter}
            checked={recentFilter["filter"]}
          ></input>
          Don't include recently played songs
        </label>
        <div className="pull-number">
          Number of Pulls
          <div className="generated-number">{generatedNumber}</div>
          <div className="plus-minus">
            <div className="minus" onClick={subNumber}>
              <div>-</div>
            </div>
            <div className="plus" onClick={addNumber}>
              <div>+</div>
            </div>
          </div>
        </div>
        {!songlist[0] && (
        <div className="csv-input-area">
          <label>
            Input area for CSV
            <textarea
              id="csv-input"
              className="csv-input"
              value={csvData}
              onChange={(e) => handleCsvInput(e)}
            ></textarea>
          </label>
          <button onClick={createDb}>Create DB</button>
        </div>
      )}
      <button onClick={pullRandom}>PULL RANDOMS</button>
      <button onClick={clearPulls}>Clear Selected Pulls</button>
      </div>
     
    </div>
  );
}
