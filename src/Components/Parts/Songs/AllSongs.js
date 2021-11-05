import React from "react";
import "./AllSongs.css"
import SomeSong from "./SomeSong";
import Song from "./Song";
// import SomeSong from "./SomeSong";

function AllSongs() {
    const [songs, setSongs] = React.useState([
        { id: 1, title: "song title 1", lyrics: "The lyrics will be posted here" },
        { id: 2, title: "song title 2", lyrics: "The lyrics will be posted here" },
        { id: 3, title: "song title 3", lyrics: "The lyrics will be posted here" },
        { id: 4, title: "song title 4", lyrics: "The lyrics will be posted here" },
        { id: 5, title: "song title 5", lyrics: "The lyrics will be posted here" },
        { id: 6, title: "song title 6", lyrics: "The lyrics will be posted here" }
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