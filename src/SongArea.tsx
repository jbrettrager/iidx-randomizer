import React, {useState, useEffect} from "react"
import {Song} from "./types"
import SingleSong from "./SingleSong.tsx"
import "./songarea.css"

export default function SongArea(props:any) {
    const randomizedSongs = props.props
    const pullRandom = props.random
    const selectedSongs = props.selected[0]
    const setSelectedSongs = props.selected[1]
    return (
        <div className="random-pulls">
            {randomizedSongs[0] && (randomizedSongs.map((song : Song) => {
                return <div>
                    <SingleSong  song={song} random={pullRandom} selected={[selectedSongs, setSelectedSongs]}/>
                </div>
            }))}
        </div>
    )
}