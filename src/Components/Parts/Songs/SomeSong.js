import React from "react";

function SomeSong({ song, changePart }) {
    return (
        <div>
            <h2>#{song.id}</h2>
            <h3>~{song.title}~</h3>
            <h3>{song.lyrics}</h3>
            <hr />
            <h1 type="button" onClick={() => changePart("songs")}>Повернутися</h1>
        </div>
    )
}

export default SomeSong;