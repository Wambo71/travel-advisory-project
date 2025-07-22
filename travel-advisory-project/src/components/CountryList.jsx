import React, { useEffect, useState} from "react";
import CountryCard from "./CountryCard";

function CountryList() {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch()
            .then((res) => res.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching countries:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading countries...</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {countries.map((country) => (
                <CountryCard key={country.name} country={country} />
            ))}
        </div>
    );
}

export default CountryList;