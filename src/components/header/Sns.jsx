import React from "react"
import { snsLink } from "../../data/header.js"

const Sns = () => {
    return (
        <div className="header_sns">
            <ul>
                {snsLink.map((sns, key) => (
                    <li key={key}>
                        <a href={sns.url} target="_blank" rel="noopener noreferrer" aria-label={sns.title}>
                            {sns.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sns