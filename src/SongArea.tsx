import React, {useState, useEffect} from "react"
import {Song} from "./types"
import SingleSong from "./SingleSong.tsx"
import "./songarea.css"

export default function SongArea(props:any) {
    const randomizedSongs = props.props
    const rerollSong = props.random
    const selectedSongs = props.selected[0]
    const setSelectedSongs = props.selected[1]
    const displaySelected = props.selected[2]
    return (
        <div className="random-pulls">
            {randomizedSongs[0] && (randomizedSongs.map((song : Song) => {
                return <div>
                    <div className="song-number">{(randomizedSongs.indexOf(song))+1}</div>
                    <SingleSong  song={song} random={rerollSong} selected={[selectedSongs, setSelectedSongs, displaySelected]}/>
                </div>
            }))}
        </div>
    )
}