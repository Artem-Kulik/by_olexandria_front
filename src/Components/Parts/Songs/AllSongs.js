import React from "react";
import "./AllSongs.css"
import SomeSong from "./SomeSong";
import Song from "./Song";
// import SomeSong from "./SomeSong";

function AllSongs() {
    const [songs, setSongs] = React.useState([
        { id: 1, title: "Все одно так любиш", lyrics: "lyrinc...", video: "https://www.youtube.com/watch?v=E81hiHAs2qM"}
    ]);
    const [part, setPart] = React.useState("songs");

    return (
        <div className="profile-content">
            <div className="main-text-place">
                <span className="main-text">Я буду співати Тобі пісню нову...</span>
            </div>
            <div>
                {part === "songs" ?
                    songs.map(song => {
                        return <Song song={song} changePart={setPart} />
                    })
                    : songs.map(song => {
                        if(song.title === part)
                            return <SomeSong song={song} changePart={setPart} />
                    })
                }
            </div>
        </div>
    )
}

export default AllSongs;