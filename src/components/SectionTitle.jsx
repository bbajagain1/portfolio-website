import React from 'react'
import "../styles/sectiontitle.css";

function SectionTitle({
heading = 'need heading',}) {
    return(
        <div className="section-title-style">
            <h1 className="heading">{heading}</h1>
        </div>
    )
}

export default SectionTitle