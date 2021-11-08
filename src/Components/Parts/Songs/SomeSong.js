import React from "react";

function SomeSong({ song, changePart }) {
    return (
        <div className="song-info">
            <h1>~{song.title}~</h1>
            <h4>{song.lyrics}</h4>
            <hr />
            {/* <video controls width="500" height="300">
                <source src={song.video} type="video/mp4" />
                <source src={song.video} type="video/webm" />
                <source src={song.video} type="video/ogg" />
                <object data="video.swf" type="application/x-shockwave-flash">
                    <param name="movie" value="video.swf" />
                </object>
            </video> */}

            <video controls="controls" poster="video/duel.jpg">
                <source src={song.video} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'></source>
            </video>
        </div>
    )
}

export default SomeSong;