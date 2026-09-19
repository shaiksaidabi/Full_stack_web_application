import React from 'react'

function Course(props) {
    return (

        <section className='container p-5 course bg-light'>
            <div className='row'>
                <div className='col-lg-6 p-2'>
                    <div className='card-deck'>
                        <div className='card ourvision'>
                            <img className='card-img-top' src={props.path} alt='' />
                            <div className='card-body' >
                                <h4 className='card-title text-center'> {props.title}</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >

    )
}

export default Course
