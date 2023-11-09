import React from "react"
import { Link } from "react-router-dom"

const VideoSearch = ( { videos }) => {
    return (
        <>
            {videos.map((video, key) => (
                <div className="video" key={key}>
                    <div className="video_thumb play_icon">
                        <Link 
                            to={`/video/${video.id.videoId}`}
                            style={{ backgroundImage: `url(${video.snippet.thumbnails.high.url})`}}    >
                        </Link>
                    </div>
                    <div className="video_info">
                        <div className="title">
                            <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                        </div>
                        <div className="info">
                            <span className="author">
                                <Link to={`/chanel/${video.snippet.channelId}`}>{video.snippet.channelId}</Link>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default VideoSearch