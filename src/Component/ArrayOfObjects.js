import React from 'react'

const ArrayOfObjects = () => {
    const items = [
        { name: "Apple", desc: "A red fruit" },
        { name: "Car", desc: "A four-wheeled vehicle" },
        { name: "Laptop", desc: "A portable computer" }
    ];

    const data = [
        {
            name: "uttam",
            desc: "good"
        },
        {
            name: "reddy",
            desc: "chandu"
        },
        {
            name: "reddy",
            desc: "chandu"
        }
    ];
    return (
        <div className='container p-5  courses'>
            <div className='row'>
                {
                    items.map((item, index) => {
                        return (

                            <div key={index} className='col-md-4 mb-5'>
                                <div className='card'>
                                    
                                    <div className='card-body'>
                                        <h1 className='card-title'> {item.name}</h1>
                                        <p className='card-text'> {item.desc}</p>
                                    </div>
                                </div>

                            </div>


                        )
                    })
                }
                {
                    data.map((each, indexs) => {
                        return (
                            <div key={indexs} className='col-md-4 '>
                                <div className='card'>
                                    <div className='card-body'>
                                        <h1 className='card-title'> {each.name}</h1>
                                        <p className='card-text'> {each.desc}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>

        </div>

    )
}

export default ArrayOfObjects