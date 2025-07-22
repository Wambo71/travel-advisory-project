import React from "react";

function CountryCard({ country }) {
    return (
        <div className="border p-4 rounded-lg shadow hover:shadow-lg mb-4">
            <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="w-20 h-12 object-cover mb-2"
            />
            <h2 className="text-xl font-bold mb-2">{country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Advisory Level: {country.advisoryLevel}</p>
            <p className="mt-2">{Country.advisory}</p>
        </div>
    );
}

export default CountryCard;