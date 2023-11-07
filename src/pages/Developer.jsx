import React, { useState, useEffect } from "react"
import Main from "../components/section/Main"

import { developerText } from "../data/developer" 
import { Link } from "react-router-dom"

const Developer = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const developerPageClass = loading ? "isLoading" : "isLoaded";

    return (
        <Main
            title="추천 개발자"
            description="추천 개발자입니다.">
            
            <section id="developerPage" className={developerPageClass}>
                <h2>💻 오늘의 추천 개발자입니다.</h2>
                
                <div className="developer_inner">
                    {developerText.map((developer, key) => (
                        <div className="developer" key={key}>
                            <div className="developer_img play_icon">
                                <Link to={`/channel/${developer.channelId}`}>
                                    <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <div className="developer_info">
                                <Link to={`/channel/${developer.channelId}`}>
                                    <span>{developer.name}</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Developer