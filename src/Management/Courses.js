import React from 'react'
import Course from "./Course"
import frontend from "./assets/frontend.jpg"
import backend from "./assets/backend.jpg"
import uiux from "./assets/uiux.jpg"
import devops from "./assets/devops.jpg"
import dm from "./assets/digital marketing.jpg"
import testing from "./assets/testing.jpg"
import ps from "./assets/ps.jpg"
import vfx from "./assets/vfx.jpg"
function Courses() {
    return (
        <div className='courses'>
            <Course title="Frontend  " path={frontend} />
            <Course title="Backend  " path={backend} />
            <Course title="UI/UX  " path={uiux} />
            <Course title="Devops" path={devops} />
            <Course title="Digital Marketing " path={dm} />
            <Course title="Testing" path={testing} />
            <Course title="Photoshop  " path={ps} />
            <Course title="VFX" path={vfx} />

        </div>

    )
}

export default Courses