import React from 'react'

function Movie(props) {
    return (
        <div className="movie">
            <figure >
                <img src={props.path} alt='' />
                <figcaption>
                    <h2>{props.title}</h2>
                    <p>{props.category}</p>
                </figcaption>
            </figure>

        </div>
    )
}

export default Movie
