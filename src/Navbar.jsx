import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <nav>
        <p>
            <ul>
                <li><NAVLINK to= {"./About"}>About</NAVLINK></li>
                <li><NAVLINK to={"./CountryDetails"}>CountryDetails</NAVLINK></li>
                <li><NAVLINK to={"countryList"}>CountryList</NAVLINK></li>
            </ul>
        </p>
    </nav>
  )
}

export default Navbar