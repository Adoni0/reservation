import React from 'react'
import './Background.css'
import poolLane from '../../images/pool-lane.jpg'
import water from '../../images/water.jpg'
import swimRace from '../../images/swimRace.jpg'
import floatie from '../../images/floatie.jpg'
import AquaticCenter from '../../images/AquaticCenter.jpg'


export default function Background() {
    return (
        <div className="gallery-container">
            <div id="gallery">
            <img src={poolLane} alt="gallery01" className="gallery-image"/>
            <img src={swimRace} alt="gallery02" className="gallery-image"/>
            <img src={water} alt="gallery03" className="gallery-image"/>
            <img src={floatie} alt="gallery04" className="gallery-image"/>
            <img src={AquaticCenter} alt="gallery05" className="gallery-image"/>
        </div>
        </div>
    )
}
