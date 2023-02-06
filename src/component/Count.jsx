import React, { useEffect, useState } from 'react'

const Count = () => {
    const [ jokes, setJokes ] = useState(0)
   
    useEffect(() => {
    async function fetchData() {
    try {
        const response = await fetch("https://api.humorapi.com/jokes/search?number=3&keywords=horse,man")
        const data = await response.json()

        setJokes(data)
        console.log(data)
    } catch(error) {
        console.log("error")
    }
    }
    fetchData()
       },[])
  return (
   <div>
    <button onClick={jokes}>Click</button>
   </div>
   
  )
}

export default Count
