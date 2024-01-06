import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header.tsx";
import SongArea from "./SongArea.tsx";
import { Difficulties, LevelFilters, Song, Recent } from "./types.tsx";
import SingleSong from "./SingleSong.tsx";
import SelectedSingleSong from "./SelectedSingleSong.tsx";

function App() {
  const [levelFilters, setLevelFilters] = useState<Array<LevelFilters>>([
    {
      "1": false,
      "2": false,
      "3": false,
      "4": false,
      "5": false,
      "6": false,
      "7": false,
      "8": false,
      "9": false,
      "10": false,
      "11": false,
      "12": false,
    },
  ]);
  const [csvData, setCsvData] = useState<string>("");
  const [generatedNumber, setGeneratedNumber] = useState<number>(2);
  const [difficulties, setDifficulties] = useState<Array<Difficulties>>([
    {
      beginner: false,
      normal: false,
      hyper: false,
      another: false,
      leggendaria: false,
    },
  ]);
  const [recentFilter, setRecentFilter] = useState<Recent>({ filter: false });
  const [songlist, setSonglist] = useState<Array<Song>>([]);
  const [recentless, setRecentless] = useState<Array<Song>>([]);
  const [randomizedSongs, setRandomizedSongs] = useState<Array<Song>>([]);
  const [selectedSongs, setSelectedSongs] = useState<Array<Song>>([]);
  const [pulledRandoms, setPulledRandoms] = useState<Array<number>>([]);
  const [displaySelected, setDisplaySelected] = useState<number>(3);
  const [rowOrColumn, setRowOrColumn] = useState<boolean>(false)

  function pullRandom() {
    let randomPulls: Array<Song> = [];
    setPulledRandoms([]);
    if (recentFilter) {
      let filteredSongList = songlist
        .filter((song: Song) => {
          if (levelFilters[0][1] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "1") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "1") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "1") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "1") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "1") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][2] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "2") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "2") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "2") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "2") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "2") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][3] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "3") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "3") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "3") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "3") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "3") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][4] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "4") return song;
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "4") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "4") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "4") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "4") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][5] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "5") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "5") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "5") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "5") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][6] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "6") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "6") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "6") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "6") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][7] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "7") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "7") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "7") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "7") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][8] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "8") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "8") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "8") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "8") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][9] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "9") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "9") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "9") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "9") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][10] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "10") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "10") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "10") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "10") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][11] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "11") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "11") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "11") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "11") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][12] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "12") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "12") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "12") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "12") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
        })
        .filter((song) => {
          let match = false;
          for (let i = 0; i < selectedSongs.length; i++) {
            if (song.title === selectedSongs[i].title) {
              match = true;
            }
          }
          if (match === false) return song;
        })
        .filter((song) => {
          let match = false;
          for (let i = 0; i < randomPulls.length; i++) {
            if (song.title === randomPulls[i].title) {
              match = true;
            }
          }
          if (match === false) return song;
        });
      let newPulledRandoms = [];
      for (let i = 1; i <= generatedNumber; i++) {
        let random: number = Math.floor(
          Math.random() * filteredSongList.length
        );
        if (!pulledRandoms.includes(random)) {
          randomPulls.push(filteredSongList[random]);
          newPulledRandoms.push(random);
          setPulledRandoms([...newPulledRandoms]);
        } else {
          while (pulledRandoms.includes(random)) {
            random = Math.floor(Math.random() * filteredSongList.length);
          }
          randomPulls.push(filteredSongList[random]);
          newPulledRandoms.push(random);
          setPulledRandoms([...newPulledRandoms]);
        }
      }
      setRandomizedSongs(randomPulls);
      console.log(pulledRandoms);
    } else {
      let filteredSongList = recentless
        .filter((song: Song) => {
          if (levelFilters[0][1] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "1") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "1") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "1") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "1") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "1") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][2] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "2") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "2") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "2") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "2") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "2") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][3] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "3") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "3") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "3") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "3") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "3") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][4] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "4") return song;
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "4") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "4") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "4") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "4") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][5] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "5") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "5") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "5") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "5") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][6] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "6") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "6") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "6") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "6") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][7] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "7") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "7") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "7") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "7") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][8] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "8") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "8") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "8") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "8") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][9] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "9") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "9") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "9") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "9") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][10] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "10") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "10") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "10") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "10") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][11] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "11") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "11") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "11") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "11") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][12] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "12") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "12") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "12") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "12") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
        })
        .filter((song) => {
          let match = false;
          for (let i = 0; i < selectedSongs.length; i++) {
            if (song.title === selectedSongs[i].title) {
              match = true;
            }
          }
          if (match === false) return song;
        })
        .filter((song) => {
          let match = false;
          for (let i = 0; i < randomPulls.length; i++) {
            if (song.title === randomPulls[i].title) {
              match = true;
            }
          }
          if (match === false) return song;
        });
      for (let i = 1; i <= generatedNumber; i++) {
        let random: number = Math.floor(
          Math.random() * filteredSongList.length
        );
        let newPulledRandoms = [];
        setPulledRandoms([]);
        if (!pulledRandoms.includes(random)) {
          randomPulls.push(filteredSongList[random]);
          newPulledRandoms.push(random);
          setPulledRandoms([...newPulledRandoms]);
        } else {
          while (pulledRandoms.includes(random)) {
            random = Math.floor(Math.random() * filteredSongList.length);
          }
          randomPulls.push(filteredSongList[random]);
          newPulledRandoms.push(random);
          setPulledRandoms([...newPulledRandoms]);
        }
      }
      setRandomizedSongs(randomPulls);
    }
  }

  function rerollSong(song: Song) {
    let randomPulls: Array<Song> = [...randomizedSongs];
    let position = randomPulls.indexOf(song);
    console.log(position, randomPulls);
    if (recentFilter) {
      let filteredSongList = songlist
        .filter((song: Song) => {
          if (levelFilters[0][1] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "1") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "1") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "1") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "1") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "1") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][2] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "2") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "2") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "2") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "2") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "2") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][3] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "3") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "3") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "3") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "3") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "3") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][4] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "4") return song;
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "4") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "4") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "4") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "4") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][5] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "5") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "5") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "5") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "5") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][6] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "6") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "6") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "6") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "6") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][7] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "7") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "7") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "7") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "7") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][8] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "8") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "8") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "8") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "8") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][9] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "9") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "9") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "9") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "9") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][10] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "10") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "10") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "10") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "10") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][11] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "11") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "11") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "11") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "11") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][12] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "12") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "12") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "12") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "12") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
        })
        .filter((song) => {
          let match = false;
          for (let i = 0; i < selectedSongs.length; i++) {
            if (song.title === selectedSongs[i].title) {
              match = true;
            }
          }
          if (match === false) return song;
        })
        .filter((song) => {
          let match = false;
          for (let i = 0; i < randomPulls.length; i++) {
            if (song.title === randomPulls[i].title) {
              match = true;
            }
          }
          if (match === false) return song;
        });
      let newPulledRandoms = [];
      for (let i = 1; i <= generatedNumber; i++) {
        let random: number = Math.floor(
          Math.random() * filteredSongList.length
        );
        if (!pulledRandoms.includes(random)) {
          randomPulls.splice(position, 1, filteredSongList[random]);
          newPulledRandoms.push(random);
          setPulledRandoms([...newPulledRandoms]);
        } else {
          while (pulledRandoms.includes(random)) {
            random = Math.floor(Math.random() * filteredSongList.length);
          }
          randomPulls.splice(position, 1, filteredSongList[random]);
          newPulledRandoms.push(random);
          setPulledRandoms([...newPulledRandoms]);
        }
      }
      setRandomizedSongs(randomPulls);
    } else {
      let filteredSongList = recentless
        .filter((song: Song) => {
          if (levelFilters[0][1] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "1") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "1") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "1") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "1") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "1") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][2] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "2") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "2") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "2") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "2") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "2") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][3] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "3") {
                song.foundDifficulty = "[B]";
                return song;
              }
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "3") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "3") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "3") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "3") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][4] === true) {
            if (difficulties[0]["beginner"] === true) {
              if (song.beginnerDiff === "4") return song;
            }
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "4") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "4") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "4") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "4") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][5] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "5") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "5") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "5") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "5") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][6] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "6") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "6") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "6") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "6") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][7] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "7") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "7") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "7") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "7") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][8] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "8") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "8") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "8") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "8") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][9] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "9") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "9") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "9") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "9") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][10] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "10") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "10") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "10") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "10") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][11] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "11") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "11") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "11") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "11") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
          if (levelFilters[0][12] === true) {
            if (difficulties[0]["normal"] === true) {
              if (song.normalDiff === "12") {
                song.foundDifficulty = "[N]";
                return song;
              }
            }
            if (difficulties[0]["hyper"] === true) {
              if (song.hyperDiff === "12") {
                song.foundDifficulty = "[H]";
                return song;
              }
            }
            if (difficulties[0]["another"] === true) {
              if (song.anotherDiff === "12") {
                song.foundDifficulty = "[A]";
                return song;
              }
            }
            if (difficulties[0]["leggendaria"] === true) {
              if (song.leggendariaDiff === "12") {
                song.foundDifficulty = "[L]";
                return song;
              }
            }
          }
        })
        .filter((song) => {
          let match = false;
          for (let i = 0; i < selectedSongs.length; i++) {
            if (song.title === selectedSongs[i].title) {
              match = true;
            }
          }
          if (match === false) return song;
        })
        .filter((song) => {
          let match = false;
          for (let i = 0; i < randomPulls.length; i++) {
            if (song.title === randomPulls[i].title) {
              match = true;
            }
          }
          if (match === false) return song;
        });
      for (let i = 1; i <= generatedNumber; i++) {
        let random: number = Math.floor(
          Math.random() * filteredSongList.length
        );
        let newPulledRandoms = [];
        setPulledRandoms([]);
        if (!pulledRandoms.includes(random)) {
          randomPulls.push(filteredSongList[random]);
          newPulledRandoms.push(random);
          setPulledRandoms([...newPulledRandoms]);
        } else {
          while (pulledRandoms.includes(random)) {
            random = Math.floor(Math.random() * filteredSongList.length);
          }
          randomPulls.push(filteredSongList[random]);
          newPulledRandoms.push(random);
          setPulledRandoms([...newPulledRandoms]);
        }
      }
      setRandomizedSongs(randomPulls);
    }
  }

  return (
    <div className="app">
      <Header
        props={[
          csvData,
          setCsvData,
          generatedNumber,
          setGeneratedNumber,
          levelFilters,
          setLevelFilters,
          difficulties,
          setDifficulties,
          recentFilter,
          setRecentFilter,
          songlist,
          setSonglist,
          recentless,
          setRecentless,
          rowOrColumn, 
          setRowOrColumn
        ]}
        random={[randomizedSongs, setRandomizedSongs, pullRandom]}
        selected={[selectedSongs, setSelectedSongs, displaySelected, setDisplaySelected]}
      />
      <div className="current-song">
        <div>Previously Selected Song</div>
        {selectedSongs[0] && (
          <SingleSong
            song={selectedSongs[selectedSongs.length - 1]}
            random={pullRandom}
            selected={[selectedSongs, setSelectedSongs]}
          />
        )}
      </div>
      <SongArea
        props={randomizedSongs}
        random={rerollSong}
        selected={[selectedSongs, setSelectedSongs, displaySelected]}
      />
      <hr></hr>
      <div>Selected Stuff</div>
      <div className={rowOrColumn ? "selected-song-area row" : "selected-song-area column"}>
        {selectedSongs.map((song) => {
          return <SelectedSingleSong song={song} />;
        })}
      </div>
    </div>
  );
}

export default App;
