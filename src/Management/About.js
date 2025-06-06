import React from 'react'
import aboutus from "./assets/7747.jpg";
import ourvision from "./assets/ourvision.jpg";
import ourmission from "./assets/ourmission.jpg"

const About = () => {

    return (
        <section className='container p-5'>
            <div className='row'>
                <div className='col-lg-6'>
                    <h2 className='text-danger text-center'>About us</h2>
                    <p>
                        Chandu Institutions is a place where education meets excellence. Established with a vision to provide quality education to every aspiring learner, we have become a trusted name in the academic and professional training space. With experienced faculty, modern infrastructure, and a commitment to student success, we help students transform their goals into achievements.

                        Whether you're preparing for competitive exams, pursuing degree-level studies, or looking to upgrade your technical skills — Chandu Institutions is your launchpad to a bright future.
                    </p>
                </div>
                <div className='col-lg-6 p-3 text-end'>
                    <img src={aboutus} className='w-75 aboutus' />
                </div>
                <div className='col-lg-6 p-3  '>
                    <img src={ourvision} className='w-75 ourvision' />
                </div>
                <div className='col-lg-6'>
                    <h2 className='text-primary text-center'>Our Vision</h2>
                    <p>
                        To be a leading educational institution that empowers students with knowledge, confidence, and character — preparing them to succeed in academics, careers, and life.

                        We envision a future where every student who walks into Chandu Institutions walks out as a confident, capable, and compassionate individual ready to lead, innovate, and make a difference.
                    </p>
                </div>
                <div className='col-lg-6 text-center'>
                    <h2>Our Mission</h2>
                    <p>
                        At Chandu Institutions, our mission is to provide quality, affordable, and value-driven education that nurtures academic excellence, personal growth, and professional readiness. We strive to create a supportive and disciplined learning environment where students are encouraged to think critically, act ethically, and pursue their goals with confidence. Through experienced faculty, practical training, and continuous mentorship, we aim to empower every student with the knowledge, skills, and values needed to succeed in today’s competitive world.
                    </p>
                </div>
                <div className='col-lg-6 p-3 text-end '>
                    <img src={ourmission} className='w-75 ourmission' />
                </div>
            </div>


        </section>

    )
}

export default About