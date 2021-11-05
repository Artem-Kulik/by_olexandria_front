import React from "react";
import "./AllSongs.css"

function Song({ song, changePart }) {
    return (
        <div className="song" onClick={() => changePart(song.title)}>
            <span>[#{song.id}] ~ {song.title} ~</span>
        </div>
    )
}

export default Song;