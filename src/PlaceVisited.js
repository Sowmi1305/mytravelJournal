import React from "react"

export default function PlaceVisited(props){
    return(<div id="card">
        <div id="image">
            <img src={props.item.img} />
        </div>
        <div id="description">
            <div>
            <img id="loc-img" src="Fill 220.png" />
            <span id="country-span">{props.item.country}</span>
            <a href={props.item.map} target="_blank" id="map">View on Google Maps</a>
            </div>
            <h1 id="place">{props.item.place}</h1>
            <p id="date">{props.item.date}</p>
            <p id="about">{props.item.about}</p>
        </div>
    </div>)
}