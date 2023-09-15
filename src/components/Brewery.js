import React from 'react'

function Brewery({name, city, website_url, phone, street}) {
    return (
        <div className='brewery'>
            <h1> {name}</h1>
            <h3> City: {city}</h3>
            <h3> Street: {street}</h3>
            {phone && <h3> Phone: {phone}</h3>}
            {website_url && <h3> Website: <a href={website_url} target="blank">{website_url}</a></h3>}
        </div>
    )
}

export default Brewery