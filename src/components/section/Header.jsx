import React from "react"

import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const header = () => {
    return (
        <header id="header" role="banner">
            <h1 className="header_logo">
                <a href="/">
                    <em aria-hidden="true"></em>
                    <span>withsiri<br />youtube</span>
                </a>
            </h1>

            <nav className="header_menu">
                <ul className="menu">
                    <li>
                        <a href="/"><CiBaseball />시리두</a>
                    </li>
                    <li>
                        <a href="/today"><CiMoneyBill />추천 영상</a>
                    </li>
                    <li>
                        <a href="/developer"><CiCoins1 />추천 개발자</a>
                    </li>
                    <li>
                        <a href="webd"><CiBoxes />웹디자인 기능사</a>
                    </li>
                    <li>
                        <a href="/website"><CiBullhorn />웹표준 사이트</a>
                    </li>
                    <li>
                        <a href="/gasp"><CiCoffeeCup />GSAP Parallax</a>
                    </li>
                    <li>
                        <a href="/port"><CiDumbbell />포트폴리오 사이트</a>
                    </li>
                    <li>
                        <a href="/youtube"><CiFries  />유튜브 클론 사이트</a>
                    </li>
                </ul>
                <ul className="keyword">
                    <li>
                        <a href="/search/siridoo">siridoo</a>
                    </li>
                    <li>
                        <a href="/">HTML</a>
                    </li>
                    <li>
                        <a href="/">CSS</a>
                    </li>
                    <li>
                        <a href="/">JavaScript</a>
                    </li>
                    <li>
                        <a href="/">siridoo</a>
                    </li>
                    <li>
                        <a href='/search/react.js'>React.js</a>
                    </li>
                    <li>
                        <a href='/search/vue.js'>Vue.js</a>
                    </li>
                    <li>
                        <a href='/search/next.js'>Next.js</a>
                    </li>
                    <li>
                        <a href='/search/node.js'>Node.js</a>
                    </li>
                    <li>
                        <a href='/search/sql'>SQL</a>
                    </li>
                    <li>
                        <a href='/search/React Portfolio'>portfolio</a>
                    </li>
                    <li>
                        <a href='/search/NewJeans'>music</a>
                    </li>
                </ul>
            </nav>

            <div className="header_sns">
                <ul>
                    <li>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub />
                        </a>
                    </li>
                    <li>
                        <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer">
                            <AiOutlineCodepen />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/?gl=KR&hl=ko" target="_blank" rel="noopener noreferrer">
                            <AiFillYoutube />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            < AiOutlineInstagram/>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default header