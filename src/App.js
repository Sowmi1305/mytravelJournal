import React from "react"
import Navbar from "./Navbar"
import PlaceVisited from "./PlaceVisited"
import data from "./data"

export default  function App(){
  const visits=data.map((arr)=><PlaceVisited item={arr} />)
  return(<div class="main">
  <Navbar />
  <section>
    {visits}
  </section>
  </div>
  )
}