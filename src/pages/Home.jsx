import React from "react"
import Main from "../components/section/Main"
import Today from "../components/contents/Today"
import Developher from "../components/contents/Developher"
import Webd from "../components/contents/Webd"
import Website from "../components/contents/Website"
import Gsap from "../components/contents/Gsap"
import Portfolio from "../components/contents/Portfolio"
import Youtube from "../components/contents/Youtube"


const Home = () => {
    return (
        <Main 
            title="withsiri youtube"
            description="withsiri 유튜브 채널에 오신것을 환영합니다">
            Home

            <Today />
            <Developher />
            <Webd />
            <Website />
            <Gsap />
            <Portfolio />
            <Youtube />
        </Main>
    )
}

export default Home