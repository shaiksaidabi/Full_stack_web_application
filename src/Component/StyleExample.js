import React from 'react'

function StyleExample() {
    const Mystyle ={
        color:"black",
        backgroundColor: "red",
        textAlign : "center",
        padding : "50px"
    }
    return (<div>

        <h1 style={{ color: "white", backgroundColor: "Black", textAlign: "center" }}>Welcome to the Myshow</h1>
        <h1 style={Mystyle}>Welcome to Myshow</h1>

    </div>
    )
}

export default StyleExample