import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Main from "../components/section/Main"

import VideoSearch from "../components/videos/VideoSearch"
import { fetchFromAPI } from "../utils/api"

const Search = () => {
    const { searchID } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null); 
    const [ loading, setLoading ] = useState(true);
    

    useEffect(() => {
            setVideos([]);
            fetchVideos(searchID);
            setLoading(true);
        }, [searchID]);
    
    const fetchVideos = (query, pageToken = "") => {
        fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
        .then((data) => {
            setNextPageToken(data.nextPageToken);
            setVideos((preVideos) => [...preVideos, ...data.items]);
            setLoading(false);
        })
        .catch((error) => {
            console.log("Error fetching data", error);
            setLoading(false);
        })
    }

    const handleLoadMore = () => {
        if(nextPageToken){
            fetchVideos(searchID, nextPageToken);
        }
    }

    const searchPageClass = loading ? "isLoading" : "isLoaded";

    return (
        <Main 
            title = "유투브 검색"
            description="유튜브 검색 결과 페이지입니다.">
            
            <section id="searchPage" className={searchPageClass}>
                <div className="video_inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className="video_more">
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>더보기</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search