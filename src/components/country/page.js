import React from "react";

function Page(props) {
    return(
        <div className="Country">
            <h1>{props.country.name}</h1>
            <img width="200" height="100" src={props.country.flag} alt={props.country.name}/>
            <p>Capital: <b>{props.country.capital}</b> </p>
        </div>
    )
}

export default Page;