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

export const headerMenu = [
    {
        title: "위드시리",
        icon: <CiBaseball />,
        src: "/",
    },{
        title: "추천 영상",
        icon: <CiMoneyBill />,
        src: "/today",
    },{
        title: "추천 개발자",
        icon: <CiCoins1 />,
        src: "/developer",
    },{
        title: "웹디자인 기능사",
        icon: <CiBoxes />,
        src: "/webd",
    },{
        title: "웹표준 사이트",
        icon: <CiBullhorn />,
        src: "/website",
    },{
        title: "GSAP Parallax",
        icon: <CiCoffeeCup />,
        src: "/gasp",
    },{
        title: "포트폴리오 사이트",
        icon: <CiDumbbell />,
        src: "/port",
    },{
        title: "유튜브 클론 사이트",
        icon: <CiFries />,
        src: "/youtube",
    },
]

export const searchKeyword = [
    {
        title: "siridoo",
        src: "/search/siridoo"
    },{
        title: "HTML",
        src: "/search/html"
    },{
        title: "CSS",
        src: "/search/css"
    },{
        title: "JavaScript",
        src: "/search/javascript"
    },{
        title: "React.js",
        src: "/search/react.js"
    },{
        title: "Vue.js",
        src: "/search/vue.js"
    },{
        title: "Next.js",
        src: "/search/next.js"
    },{
        title: "node.js",
        src: "/search/Node.js"
    },{
        title: "sql",
        src: "/search/SQL"
    },{
        title: "portfolio",
        src: "/search/React Portfolio"
    },{
        title: "music",
        src: "/search/NewJeans"
    },
]

export const snsLink = [
    {
        title: "github",
        url:"https://github.com/",
        icon: <AiFillGithub />
    },{
        title: "codepen",
        url:"https://codepen.io/",
        icon: <AiOutlineCodepen />
    },{
        title: "youtube",
        url:"https://https://www.youtube.com/.com/",
        icon: <AiFillYoutube />
    },{
        title: "instagram",
        url:"https://www.instagram.com/",
        icon: <AiOutlineInstagram/>
    },
]