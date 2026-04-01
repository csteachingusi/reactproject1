import { useEffect, useState } from "react";

function PropertyList() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch("https://127.0.0.1:7239/api/Properties")
            .then(res => res.json())
            .then(data => setProperties(data));
    }, []);

    return (
        <div>
            <h2>Properties</h2>
            <ul>
                {properties.map(p => (
                    <li key={p.propertyID}>
                        {p.propertyName} - ${p.monthlyRent}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PropertyList;
