// import React, { useState } from 'react'

// const StateEx = () => {
//     
//   return (

//     <div className='container p-5 text-center'>
//         
//     </div>
//   )
// }

// export default StateEx

import React, { useEffect } from 'react'
import { useState } from 'react'
const StateEx = () => {
    const [count, sount] = useState(0)
    const [name, setName] = useState("uttam")
    useEffect(()=>{
        console.log("useEffect is Executed");
        document.title = `You Clicked ${count} times`
    })
    return (
        <div className='container p-5 text-center'>

            <h1>Counter:{count}</h1>
            <button className='btn btn-primary me-3' onClick={() => sount(count + 1)}>Increment</button>
            <button className='btn btn-danger' onClick={() => sount(count - 1)}>Decrement</button>

            <h1>welcome {name}</h1>
            <button className='btn btn-primary' onClick={() => setName("reddy")}>Button</button>

        </div>
    )
}

export default StateEx